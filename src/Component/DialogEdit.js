import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const EditDialog = ({ open, onClose, data, onSubmit }) => {
  const [editFormData, setEditFormData] = useState({
    name: '',
    description: '',
    priority: '',
  });

  useEffect(() => {
    if (data) {
      setEditFormData(data); // Set the form data when data prop changes
    }
  }, [data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(editFormData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>Edit Data</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Enter Your Name*"
            value={editFormData.name}
            onChange={handleInputChange}
            variant="outlined"
            fullWidth
          />
          <br /> <br />
          <TextField
            name="description"
            label="Description*"
            value={editFormData.description}
            onChange={handleInputChange}
            variant="outlined"
            multiline
            maxRows={4}
            fullWidth
          />
          <br /> <br />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="edit-dialog-select-label"> Priority </InputLabel>
              <Select
                labelId="edit-dialog-select-label"
                id="edit-dialog-select"
                name="priority"
                value={editFormData.priority}
                label="Priority"
                variant="outlined"
                onChange={handleInputChange}
              >
                <MenuItem value="high"> High </MenuItem>
                <MenuItem value="medium"> Medium </MenuItem>
                <MenuItem value="low"> Low </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <br /><br />
          <div className="text-center">
            <Button type="submit" variant="contained" color="primary">
              Update
            </Button>
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
