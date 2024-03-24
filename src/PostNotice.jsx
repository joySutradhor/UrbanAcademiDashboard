/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import moment from 'moment';

const PostNotice = ({ open, handleClosePost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const adjustTextareaHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    console.log(description)
    adjustTextareaHeight(e.target);
  };

  const handlettileChange = (e) => {
    setTitle(e.target.value);
    
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim()) {
      alert('Title and description cannot be empty');
      return;
    }

    const currentDate = moment().format('YYYY-MM-DD');
    const currentTime = moment().format('h.mm.ss');

    try {
      const response = await fetch('https://server-side-urban-academi.vercel.app/Newnotice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, date: currentDate, time: currentTime })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setTitle('');
      setDescription('');
      window.location.reload() ;

      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={handleClosePost}></div>
        <div className="relative bg-gray-700 rounded-sm max-w-md mx-auto overflow-hidden shadow-md transform transition-all sm:w-full sm:max-w-lg">
          <div className="px-6 py-4">
            <div className="flex justify-between items-start">
              <div className="text-lg text-gray-300 font-semibold mb-4 ">
                <h2 className="text-lg text-gray-300 font-semibold">Submit Notice</h2>
              </div>
              <button className="text-md text-gray-300 py-2 rounded-md focus:outline-none font-semibold hover:text-red-600" onClick={handleClosePost}>Close</button>
            </div>
            <div className='flex flex-col w-[90%]'>
              <input
                type="text"
                placeholder='Enter Notice Title'
                onChange={handlettileChange}
                className="text-sm text-gray-300 bg-transparent outline-none border border-gray-500 py-2 px-2 rounded-sm mb-3"
              />
              <textarea
                value={description}
                onChange={handleDescriptionChange}
                className='text-[14px] rounded-sm bg-transparent outline-none border border-gray-500 py-2 px-2 text-gray-300 resize-none overflow-hidden'
                placeholder='Write a description here ...'
                rows={2}
                style={{ minHeight: '3rem', maxHeight: '10rem' }}
              ></textarea>
            </div>
          </div>
          <div className="px-2 py-4 bg-gray-700 flex justify-end">
            <div>
              <button className="text-md py-2 px-4 rounded-md focus:outline-none text-green-500 font-semibold" onClick={handleSubmit}>Submit</button>
              <button className="text-md py-2 px-4 rounded-md focus:outline-none text-red-500 font-semibold" onClick={handleClosePost}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostNotice;
