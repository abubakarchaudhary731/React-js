import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { GlobalContext } from '../Context';
import { useNavigate, Link} from 'react-router-dom';

function AddBalance() {
  const {addData, handleChange, form, check, setCheck } = GlobalContext();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else { 
      addData();
      navigate('/')
    }
    setValidated(true);
  };

 

 
  return (
    <div className="container w-75 my-3">
      <div className="text-white text-center rounded-3 bg-primary">
        <h1 className='p-5'> Please Fill this Form. </h1>
      </div> <br /><br />
    <div className="text-center">
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      
      <Row className="mb-3 justify-content-center">
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Enter Your Amount <small> between (1-100k) </small> </Form.Label>
          <InputGroup hasValidation>
            <Form.Control
            value={form.amount}
            onChange={handleChange} name='amount'
              type="number" placeholder="Enter Amount" min={1} max={100000} maxLength={5}
              aria-describedby="inputGroupPrepend" required />
            <Form.Control.Feedback type="invalid">
              Please Enetr your Amount.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

    <Row className="mb-3 justify-content-center">
      <InputGroup>
        <Form.Control as="textarea" 
         value={form.description}
         onChange={handleChange} name='description'
        placeholder='Enter Description' required />
        <Form.Control.Feedback type="invalid">
          Please Enetr Description.
        </Form.Control.Feedback>
      </InputGroup>
    </Row>

      <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
        <Form.Check 
         value={check}
         onChange={(e) => setCheck(e.target.checked) } name='check' 
          label="Is it Transfer"
          feedback="You must agree before submitting."
          feedbackType="invalid" />
        </Form.Group>
      </Row>
      {
        (check === true) && (
        <Row className="mb-3 justify-content-center">
         
        <Form.Group as={Col}  md="4" controlId="validationCustomUsername">
          <Form.Label>Enter Receiver Name </Form.Label>
          <InputGroup hasValidation>
            <Form.Control
            value={form.name}
            onChange={handleChange} name='name'
              type="text" placeholder="Enter Here" aria-describedby="inputGroupPrepend" required />
            <Form.Control.Feedback type="invalid">
              Please Enetr your Name.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
        )
      }
      <div className="my-5">
      <Link to={"/"} className='float-start'>
        <Button> Back </Button>
      </Link>
      <Button type="submit" className='float-end'> ADD </Button>
      </div>
    </Form>
    </div>
    </div>
  );
}

export default AddBalance;