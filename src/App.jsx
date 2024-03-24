import { useState } from 'react';
import NoticeTable from './NoticeTable';
import ModalDialog from './ModalDialog';
import PostNotice from './PostNotice';



function App() {

  const [addNotice , setAddNotice] = useState(false)


  const handleAddNotice = () => {
    setAddNotice(true) ;
    
  }

  const handleClosePost = () =>{
    setAddNotice(false) ;
  }

  return (
    <div className='bg-gray-800 h-auto '>
      <div className='shadow-lg py-4 '>
        <h1 className='text-clamp font-semibold text-gray-400 px-[50px]'>Dashboard</h1>
      </div>
      <div className='min-h-[100vh] max-w-[90wh] pt-[40px] px-[50px]'>

        {/* -------------------- show notice all ----------- */}
        <div>
            <div className='flex justify-between items-center my-[20px]'>
            <h1 className='text-title text-gray-300 mb-[5px]'>Notice Board</h1>
            <h1 className='text-title py-1 px-6 mb-[5px] border border-gray-700 text-green-500 cursor-pointer' onClick={handleAddNotice}>Add Notice</h1>
            </div>
          <div className='border border-gray-700 bg-gray-800' >
            <div className='bg-gray-800'>
              {/* <h3 className='text-gray-300 text-title px-[10px] text-center'>SL NO .</h3>
              <h3 className='text-gray-300 text-title px-[10px] text-center'>SL NO .</h3>
              <h3 className='text-gray-300 text-title px-[10px] text-center'>SL NO .</h3>
              <h3 className='text-gray-300 text-title px-[10px] text-center'>SL NO .</h3> */}
              <NoticeTable></NoticeTable>
            </div>
          </div>
        </div>

        {/* <Modal></Modal> */}
              <ModalDialog></ModalDialog>
              {
                addNotice && <PostNotice 
                open={addNotice} handleClosePost={handleClosePost}
                >

                </PostNotice>
              }
             
         
      </div>
    </div>
  )
}

export default App;
