import React, { useState } from 'react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';
import Header from '../ui/Header';
import { IoMdSend } from 'react-icons/io';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id='contact'
      className='md:mx-56 flex relative min-h-screen px-6 md:px-20 md:py-28'
    >
      <div className='flex flex-col space-y-10 md:space-y-20 items-center justify-center w-full text-white'>
        <Header title='Contact' />
        <form
          className='flex flex-col max-w-3xl w-full gap-3 md:gap-6'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col md:flex-row gap-3 md:gap-6'>
            <Input
              placeholder='Name'
              name='name'
              onChange={handleChangeInput}
            />
            <Input
              placeholder='Phone'
              name='phone'
              onChange={handleChangeInput}
            />
          </div>
          <Input
            placeholder='Email'
            name='email'
            type='email'
            onChange={handleChangeInput}
          />
          <TextArea
            placeholder='Type your message...'
            name='message'
            onChange={handleChangeInput}
          />
          <button
            type='submit'
            className='p-3 rounded-lg bg-white hover:bg-gray-300 text-black transition-all duration-300'
          >
            <span className='flex justify-center items-center gap-1'>
              Send
              <IoMdSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactComponent;
