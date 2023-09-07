import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


const Error = () => {
  return (
    <div>
        <div className="text-center">
            <img src="../images/errror.png" alt="Error"  className='w-25 h-25'/> <br />
        <Link to={'/'}>
            <button className='btn btn-primary'> Go back </button>
        </Link>
        </div>
    </div>
  )
}

export default Error