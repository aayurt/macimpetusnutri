import React, { useState } from 'react';
const BASE_URL = import.meta.env.VITE_API_URL;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:myron@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;
    window.location.href = mailtoLink;
    // Clear the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };
  return (
    <div className='max-w-6xl px-4 mx-auto mt-4 min-h-[100vh]'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='name' className='block text-lg font-medium mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className={`border dark:border-gray-300 rounded-lg px-4 py-2 w-full bg-white dark:bg-gray-800 dark:text-white`}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-lg font-medium mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={`border dark:border-gray-300 rounded-lg px-4 py-2 w-full bg-white dark:bg-gray-800 dark:text-white`}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='subject' className='block text-lg font-medium mb-2'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              className={`border dark:border-gray-300 rounded-lg px-4 py-2 w-full bg-white dark:bg-gray-800 dark:text-white`}
              required
            />
          </div>
          <div className='mb-4'>
            <label htmlFor='message' className='block text-lg font-medium mb-2'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              className={`border dark:border-gray-300 rounded-lg px-4 py-2 w-full h-32 bg-white dark:bg-gray-800 dark:text-white`}
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg dark:bg-gray-800`}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
