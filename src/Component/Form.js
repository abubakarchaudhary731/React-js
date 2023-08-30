import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const FormComponent = ({ onSubmit, initialFormData }) => {
  const [priority, setPriority] = useState(''); // Initialize priority state
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    description: false,
    priority: false,
  });

  useEffect(() => {
    if (initialFormData) {
      setFormData(initialFormData); // Set initial form data when available
      setPriority(initialFormData.priority);
    }
  }, [initialFormData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      name: formData.name === '',
      description: formData.description === '',
      priority: priority === '', // Check if priority is not selected
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.description && !newErrors.priority) {
      onSubmit({ ...formData, priority }); // Pass form data and priority to parent component
      setFormData({ name: '', description: '' });
      setPriority(''); // Reset priority
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        name="name"
        label="Enter Your Name*"
        value={formData.name}
        onChange={handleInputChange}
        error={errors.name}
        helperText={errors.name && 'Name is required'}
        variant="outlined"
        fullWidth
      />
      <br /> <br />
      <TextField
        name="description"
        label="Description*"
        value={formData.description}
        onChange={handleInputChange}
        error={errors.description}
        helperText={errors.description && 'Description is required'}
        variant="outlined"
        multiline
        maxRows={4}
        fullWidth
      />
      <br /> <br />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"> Priority </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={priority}
            label="Priority"
            variant="outlined"
            onChange={(event) => setPriority(event.target.value)}
            error={errors.priority}
            helperText={errors.priority && 'Priority is required'}
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
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FormComponent;
