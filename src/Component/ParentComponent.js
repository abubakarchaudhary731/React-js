import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import FormComponent from './Form'; // Import the form component
import DeleteConfirmationDialog from './DialogDelete';
import RemoveAllConfirmationDialog from './DialogRemove';


const ParentComponent = () => {
  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [deleteIndex, setDeleteIndex] = useState(null); // Index of data to be deleted
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openRemoveAllDialog, setOpenRemoveAllDialog] = useState(false);
  const [editFormData, setEditFormData] = useState({
    name: '',
    description: '',
    priority: '',
  });

  const handleFormSubmit = (data) => {
    if (editIndex !== null) {
      const newData = [...submittedData];
      newData[editIndex] = data;
      setSubmittedData(newData);
      setEditIndex(null);
    } else {
      sortDataByPriority();
      setSubmittedData((prevData) => [...prevData, data]);
    }
    setEditFormData({
      name: 'Qasm',
      description: '',
      priority: '',
    });
  };

  const handleEdit = (index) => {
    const dataToEdit = submittedData[index];
    setEditIndex(index);
    setEditFormData(dataToEdit);
  };

  const handleDelete = (index) => {
    setDeleteIndex(index); // Set the index of data to be deleted
    setOpenDeleteDialog(true); // Open the delete confirmation dialog
  };

  const confirmDelete = () => {
    setSubmittedData((prevData) => prevData.filter((_, i) => i !== deleteIndex));
    setDeleteIndex(null); // Reset deleteIndex
    setOpenDeleteDialog(false); // Close the delete confirmation dialog
  };

  const closeDeleteDialog = () => {
    setDeleteIndex(null); // Reset deleteIndex
    setOpenDeleteDialog(false); // Close the delete confirmation dialog
  };

  

  // Sort Data
  const sortDataByPriority = () => {
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    const sortedData = [...submittedData].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    setSubmittedData(sortedData);
  };

  // Remove All Data
  const openRemoveAllConfirmation = () => {
    setOpenRemoveAllDialog(true);
  };

  const confirmRemoveAll = () => {
    setSubmittedData([]);
    setOpenRemoveAllDialog(false);
  };

  const closeRemoveAllDialog = () => {
    setOpenRemoveAllDialog(false);
  };

  return (
    <div>
      <div className="row">
        <div className="col-8">
          <div className="text-center bg-dark text-white p-4"> <h3>Todo List</h3> </div>
          <br />
          <div className="container">
         
            <FormComponent onSubmit={handleFormSubmit} editFormData={editFormData} 
            initialFormData={submittedData[editIndex]}  />
          </div>
        </div>

        {/* Result Session */}
        <div className="col-4">
          {submittedData.map((data, index) => (
            <div className="container border-start" key={index}>
              <div className="d-flex">
              <h5 className='flex-grow-1'> {data.name} </h5> 
              <i> {data.priority} </i> 
            </div>
            <div className="row">
              <div className="col-8">
                <pre> {data.description} </pre>
              </div>
              <div className="col-1">
                <button className='btn btn-outline-success mt-3' onClick={() => handleEdit(index)}> <EditIcon /> </button>
              </div>
              <div className="col-1"></div>
              <div className="col-1">
                <button className='btn btn-outline-danger mt-3' onClick={() => handleDelete(index)}> <DeleteForeverIcon /> </button>
              </div>
            </div>
          <hr />
            </div>
          ))}
          <div className="text-center mt-2">{
            submittedData.length > 0 && ( <button className='btn btn-outline-danger' onClick={openRemoveAllConfirmation}> Remove All </button> ) 
          }
          </div>


  <DeleteConfirmationDialog
        open={openDeleteDialog}
        onClose={closeDeleteDialog}
        onConfirm={confirmDelete}  />



  <RemoveAllConfirmationDialog
        open={openRemoveAllDialog}
        onClose={closeRemoveAllDialog}
        onConfirm={confirmRemoveAll}  />
        </div>
        
      </div>
    </div>
  );
};

export default ParentComponent;
