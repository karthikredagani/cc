import React, { useState } from 'react';
import './faqs.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What types of furniture do you offer?',
      answer: 'We offer a wide range of furniture including sofas, beds, dining tables, and office furniture.'
    },
    {
      question: 'Do you offer delivery services?',
      answer: 'Yes, we provide delivery services across multiple locations. Delivery charges may apply depending on your location.'
    },
    {
      question: 'Can I customize my furniture?',
      answer: 'Absolutely! We offer customization services to fit your specific needs and preferences.'
    },
    {
      question: 'What is the return policy?',
      answer: 'You can return the furniture within 30 days of delivery if it meets our return policy conditions.'
    },
    {
      question: 'Do you offer warranty on furniture?',
      answer: 'Yes, all our furniture comes with a 1-year warranty covering manufacturing defects.'
    },
    {
        question: 'Do you offer warranty on furniture?',
        answer: 'Yes, all our furniture comes with a 1-year warranty covering manufacturing defects.'
      },
      {
        question: 'Will I be eligible for a discount in case of a bulk purchase?',
        answer: 'The discount applicable is communicated on the website and the store for the product you are purchasing'
      },
      {
        question: 'What documents will I have to submit?',
        answer: 'Our team will collect the following documents from you: Photo ID Proof (Pan Card, Aadhar Card, Voter ID card, Driving License, Passport etc.) Address Proof (Passport, Telephone Bill, Gas bill, Electricity bill, Bank account statement with name and address etc.) Cancelled cheque (Only from a nationalized bank) – EMIs will be deducted from this bank account. Duly filled and signed ECS Mandate form and loan application form (will be provided by our team) Our customer service team will inform you whether any other documents would be required based on applicable eligibility criterion.'
      },
      {
        question: 'How would my EMI schedule look like?',
        answer: 'Your application will be processed in any of the following EMI schemes 12/4, 10/2, 10/0, 18/1, 24/1 where a 10 by 2 scheme require you to make a down- payment for 2 instalments and the remaining amount will be deducted in 8 EMIs.'
      }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div 
          key={index} 
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <h3 className="faq-question">{item.question}</h3>
          <p className="faq-answer">{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQ;