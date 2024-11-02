import React, { useState } from 'react';
import Input from '../ui/Input';
import TextArea from '../ui/TextArea';

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
      className='mx-56 flex relative min-h-screen px-20 py-28'
    >
      <div className='flex flex-col space-y-20 items-center justify-center w-full text-white'>
        <h1 className='text-6xl font-serif font-bold'>Contact</h1>
        <form
          className='flex flex-col max-w-3xl w-full gap-6'
          onSubmit={handleSubmit}
        >
          <div className='flex gap-6'>
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
            Submit
          </button>{' '}
        </form>
      </div>
    </section>
  );
};

export default ContactComponent;
