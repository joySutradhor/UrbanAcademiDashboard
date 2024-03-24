/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import ConfirmationModal from './ConfirmationModal';
import ConfirmationDelete from './ConfirmationDelete';

const ModalDialog = ({ open, handleClose, rowData }) => {
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [confirmDelete, setConfirmaDelete] = useState(false);
 
  
  useEffect(() => {
    if (rowData) {
      setUpdatedTitle(rowData.title || '');
      setDescription(rowData.description || '');
    }
  }, [rowData]);

  const adjustTextareaHeight = (element) => {
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    adjustTextareaHeight(e.target);
  };

  const handleUpdate = () => {
    setShowConfirmationModal(true);
  };
  

  const handleConfirmUpdate = () => {
    // Perform the PATCH request to update the title and description
    fetch(`https://server-side-urban-academi.vercel.app/Newnotice/${rowData?._id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: updatedTitle,
        description: description,
        // Add other fields to update here
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update notice');
      }
      // Handle success (e.g., show a success message)
      console.log('Notice updated successfully');
      setShowConfirmationModal(false);
      
      handleClose();
      window.location.reload(); 
    })
    .catch(error => {
      // Handle error (e.g., show an error message)
      console.error('Error updating notice:', error);
    });
  };


  const handleDelete = () => {
    setConfirmaDelete(true);
  };

  const handleConfirmDelete = () => {
    alert("deleted")
    fetch(`https://server-side-urban-academi.vercel.app/Newnotice/${rowData?._id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete notice');
        }
        console.log('Notice deleted successfully');
        
        handleClose();
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error deleting notice:', error);
      });
  };
  

  if (!open) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={handleClose}></div>
        <div className="relative bg-gray-700 rounded-sm max-w-md mx-auto overflow-hidden shadow-md transform transition-all sm:w-full sm:max-w-lg">
          <div className="px-6 py-4">
            <div className="flex justify-between items-start">
              <div className="text-lg text-gray-300 font-semibold mb-4 ">
                <h2 className="text-lg text-gray-300 font-semibold">Edit Notice</h2>
                <p className="text-[12px] text-gray-300">{rowData.date}</p>
              </div>
              <button className="text-md text-gray-300 py-2 rounded-md focus:outline-none font-semibold hover:text-red-600" onClick={handleClose}>Close</button>
            </div>
            <div className='flex flex-col w-[90%]'>
              <input
                type="text"
                placeholder='Enter Notice Title'
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
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
              <button className="text-md py-2 px-4 rounded-md focus:outline-none text-green-500 font-semibold" onClick={handleUpdate}>Update</button>
              <button className="text-md py-2 px-4 rounded-md focus:outline-none text-red-500 font-semibold" onClick={handleDelete}>Delete</button>
            </div>
          </div>

        </div>
          {
            showConfirmationModal && <ConfirmationModal
            open={showConfirmationModal}
            handleClose={() => setShowConfirmationModal(false)}
            handleConfirm={handleConfirmUpdate}
            
          />
          }
          {
            confirmDelete && <ConfirmationDelete
            open={confirmDelete}
            handleCloseDelete={() => setConfirmaDelete (false)}
            handleDelete = {handleConfirmDelete}
            
            >

            </ConfirmationDelete>
          }
      </div>
    </div>
  );
};

export default ModalDialog;
