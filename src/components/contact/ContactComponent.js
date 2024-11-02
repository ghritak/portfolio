import React, { useState } from 'react';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(value);
  };

  return (
    <section
      className='mx-56 flex relative min-h-screen px-20 py-28'
      id='contact'
    >
      <div className='flex flex-row space-x-20'>
        <div className=' flex justify-center items-center'>
          <div className='space-y-20'>
            <h1 className='text-6xl font-serif font-bold text-white'>
              Contact
            </h1>
            <div className='flex flex-row space-x-5'>
              <div className=' text-white space-y-4'>
                <form>
                  <input
                    name='name'
                    className='bg-black'
                    value={formData.name}
                    onChange={handleChangeInput}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
