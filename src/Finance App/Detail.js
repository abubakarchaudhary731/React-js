import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { GlobalContext } from '../Context';
import { Link , useParams, useNavigate } from 'react-router-dom';


const Detail = () => {
    const {detail, setDeleteIndex, confirmDelete} = GlobalContext();
    const {id} = useParams();
    const navigate = useNavigate();
    const ID = parseInt(id);

    console.log(ID);
    const [open, setOpen] = useState(false);

    const handleDelete = (id) => {
        setDeleteIndex(id);
        setOpen(true);
    };
    
    const onConfirm = () => {
        confirmDelete(ID);
        setOpen(false); // Close the delete confirmation dialog
        navigate('/');
    };
    const onClose = () => {
        setDeleteIndex(null);
        setOpen(false);
    };

    return (
    <div>
        <div className="container rounded-4 bg-primary text-center my-3 text-white w-75">
        <div className="p-5">
            <h1> DETAILED INFORMATION </h1>  
        </div>   
        </div>    
     
    <div className="container w-75 my-4" key={id}><hr />
        <div className="d-flex">
            <h3><b>Name:</b></h3> 
            <p className='my-2 mx-4'> {!(detail.name) ? "Your Expense is Normal" : detail.name} </p>
        </div><hr />
        <div className="d-flex">
            <h3><b>Your Expense Amount:</b></h3> 
            <p className='my-2 mx-4'> {detail.amount} </p>
        </div> <hr />
        <div className="d-flex">
            <h3><b>Reason:</b></h3> 
            <p className='my-2 mx-4'> {detail.description} </p>
        </div><hr />
        <div className="d-flex">
            <h3><b>Transection Time:</b></h3> 
            <p className='my-2 mx-4'> {detail.time} </p>
        </div><hr />
        <div className="my-5">
            <Link to={"/"}>
                <button className='btn btn-primary float-start'> Back to Home </button>
            </Link>  
            <button className='btn btn-danger float-end'onClick={() => handleDelete(ID)}> Delete </button>
        </div>
    </div>

    {/* Dialog  */}
    <Dialog open={open} onClose={onClose}>
    <DialogTitle>Confirm Delete</DialogTitle>
    <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this data?
    </DialogContentText>
    </DialogContent>
    <DialogActions>
    <Button onClick={onClose} color="primary">
        Cancel
    </Button>
    <Button  color="primary" onClick={onConfirm}>
        Delete
    </Button>
    </DialogActions> 
    </Dialog>
    </div>
    );
}

export default Detail;
