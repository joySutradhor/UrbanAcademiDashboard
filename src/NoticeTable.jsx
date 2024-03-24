import DataTable from "react-data-table-component";
import  { createTheme } from 'react-data-table-component';
import ModalDialog from './ModalDialog';
// import "./NoticeTable.css"
import { useEffect, useState } from "react";


const NoticeTable = () => {
    const [data, setData] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null);
     // Track the selected row
//   const [showModal, setShowModal] = useState(false); 

    createTheme('solarized', {
        text: {
          primary: '#E0E0E0',
          secondary: '#BDBDBD',
        },
        background: {
          default: '#1F2937',
        },
        context: {
          background: '#1F2937',
          text: '#FFFFFF',
        },
        divider: {
          default: '#374151',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark');

    const columns = [
       
        {
            name : "Date",
            selector : row=>row.date,
            style: {
            
              textAlign: 'center',
              
          }
            
        },
        {
            name : "Title",
            selector : row=>row.title ,
            wrap: true,
            center: true,
          
         
        },
        {
            name : "Description",
            selector : row=>row.description ,
            wrap: true,
            center: true,
            style: {
            
              padding : "10px 0px"
              
          }
           
          
        },
        {
            name : "status",
            center: true,
            selector : row => <button onClick={() => handleStatusClick(row)}>Edit</button>,
          
        }
      
    ]

    

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://server-side-urban-academi.vercel.app/allNoticex10');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    

    const handleStatusClick = (rowData) => {
        setSelectedRowData(rowData);
       
        setModalOpen(true);
        // setShowModal(true);
        // alert("Edit button clicked for row ID: "+ row);
        // console.log(row)
        
    };
    const handleCloseModal = () => {
        setModalOpen(false);
      };
    // console.log(showModal)
    return (
        <div>
            <DataTable
           
              columns={columns}
              data={data}
              pagination={5}
              theme="solarized"
              fixedHeader
            />
            {/* Conditionally render the ModalDialog component */}
            <ModalDialog open={modalOpen} handleClose={handleCloseModal} rowData={selectedRowData}  />
        </div>
    );
};

export default NoticeTable;