import React, { useState } from 'react';

const questions = [
  {
    question: 'What services does Connecting Chains offer?',
    answer: 'Connecting Chains specializes in recruitment and outsourcing services, providing top-tier candidates and tailored solutions to meet your business needs.',
  },
  {
    question: 'How do I get started with Connecting Chains?',
    answer: 'To get started, simply contact us through our website or call our support line for a consultation.',
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a wide range of industries including technology, finance, healthcare, and more.',
  },
  {
    question: 'How does Connecting Chains ensure the quality of candidates?',
    answer: 'We have a rigorous screening process that includes background checks, skill assessments, and interviews to ensure we provide only the best candidates.',
  },
];

const Question = () => {
  const [openQuestion, setOpenQuestion] = useState(questions[0].question);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white flex flex-col md:flex-row">
      <div className="md:w-1/2 pr-8">
        <button className="px-4 py-2 text-sm font-medium leading-5 text-gray-700 bg-gray-200 rounded-full">
          Frequently Asked Questions
        </button>
        <h2 className="text-5xl font-normal text-gray-900 mt-4 [font-family:'Poly-Regular'] mb-36">
          Have Questions? <br /> We Got The Answer
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          If you didn't find the answer you were looking for, check out our additional resources or get in touch with us directly.
        </p>
        <a href="/help-center" className="text-blue-600 text-lg font-medium">
          Help Center →
        </a>
      </div>
      <div className="md:w-1/2">
        {questions.map((q) => (
          <div key={q.question} className="mb-4">
            <button
              onClick={() => setOpenQuestion(q.question)}
              className="w-full flex justify-between items-center py-4 text-lg font-bold text-gray-700"
            >
              {q.question}
              <span>{openQuestion === q.question ? '−' : '+'}</span>
            </button>
            {openQuestion === q.question && (
              <p className="text-gray-600 mt-2">{q.answer}</p>
            )}
            <hr className="my-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
