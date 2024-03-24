/* eslint-disable react/prop-types */
// ConfirmationModal.jsx



const ConfirmationDelete = ({ open, handleCloseDelete, handleDelete , }) => {
    if (!open) return null;
  
    return (
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={handleCloseDelete}></div>
          <div className="relative bg-gray-700 rounded-sm max-w-md mx-auto overflow-hidden shadow-md transform transition-all sm:w-full sm:max-w-lg">
            <div className="px-6 py-4">
              <p className="text-lg  font-semibold mb-4 text-red-400">Are you sure want to Delete?</p>
              <div className="flex justify-end">
                <button className="text-md text-gray-300 py-2 px-4 rounded-md focus:outline-none font-semibold hover:text-red-600 mr-2" onClick={handleCloseDelete}>No</button>
                <button className="text-md text-gray-300 py-2 px-4 rounded-md focus:outline-none font-semibold hover:text-green-600" onClick={handleDelete}>Yes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmationDelete;
  