import React from 'react';
import Wizard from './Wizard';

const Page = () => {
  return (
    <div className="bg-white m-4 rounded-xl h-full pt-6 px-8 text-gray-950">
      <h1 className="text-3xl font-bold">Create Chatbot</h1>
      <p className='text-base text-[#555555] mb-3'>Easily design and deploy your own AI-powered chatbot to engage users, answer questions, and automate conversations.</p>
    <Wizard/>
    </div>
  );
};

export default Page;
