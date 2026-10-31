import React, { useState } from 'react';
const FAQs = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left text-white hover:text-gray-300 transition-colors duration-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base font-medium tracking-wide">{question}</span>
        <span className="text-xl ml-4 font-light text-gray-400 select-none">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? '200px' : '0px',
          opacity: isOpen ? 1 : 0
        }}
      >
        <p className="pb-6 text-gray-400 text-sm leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ= () => {
  const faqData = [
    {
      question: "What's the best thing about Switzerland?",
      answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    },
    {
      question: "How do you make holy water?",
      answer: "You boil the hell out of it."
    },
    {
      question: "What do you call someone with no body and no nose?",
      answer: "Nobody knows."
    },
    {
      question: "Why do you never see elephants hiding in trees?",
      answer: "Because they're really good at it."
    },
    {
      question: "Why can't you hear a pterodactyl go to the bathroom?",
      answer: "Because the 'P' is silent."
    },
    {
      question: "Why did the invisible man turn down the job offer?",
      answer: "He just couldn't see himself doing it."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0B111E] flex items-center justify-center px-4 py-12 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight">
          Frequently asked questions
        </h2>
        <div className="space-y-1">
          {faqData.map((faq, index) => (
            <FAQs 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;