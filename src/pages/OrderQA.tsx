import React, { useState } from 'react';

const OrderQA = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleQuestionSubmit = async () => {
    // Simulate an API call to get the answer
    const response = await fetch('/api/answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setAnswer(data.answer);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Order Q&A</h1>
      <div className="mb-4">
        <textarea
          className="w-full p-2 border rounded"
          rows={4}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about your order..."
        />
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleQuestionSubmit}
      >
        Submit
      </button>
      {answer && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <h2 className="font-semibold">Answer:</h2>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default OrderQA;