import React , {useState} from 'react';
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddBalance = () => {
  const [form , setForm] = useState({
    name: '',
    amount: '',
  })

  const [data , setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({
    ...prevData,
      [name]: value
    }))
    
  }

  const handleSubmit = (event) =>{
    event.preventDefault();
  }

// ADD Data
  const addData = () =>{
    setData([...data , {
      name:form.name,
      amount:form.amount,
    }])
    setForm({name: "" , amount: "" , })
  }

  return (
    <div>
      <div className="container w-75">
      <div className="text-white text-center rounded-3 bg-primary">
        <h1 className='p-5'> Please Fill this Form. </h1>
      </div> <br /><br />

        <form onSubmit={handleSubmit}>
          <TextField 
          value={form.name}
          onChange={handleChange}
          id="outlined-basic" label="Outlined" name='name' variant="outlined" />

          <TextField 
          value={form.amount}
          onChange={handleChange}
          id="outlined-basic" label="Outlined" name="amount" variant="outlined" />

        <div className="text-center">
          <button className='btn btn-primary' onClick={addData}> ADD </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default AddBalance