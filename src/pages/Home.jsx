import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Graphical from '../components/Graphical';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const [formValue, setFormValue] = useState({
    Firstname: "",
    Lastname: '',
    DOB: '',
    MaritalStatus: '',
    Address: '',
    Income: 0,
    Expense: 0,
    insurance: false,
    Loan: '',
    IncomeType: "monthly",
    ExpenseType: 'monthly',
    AmtInvest: 0
  })
  const [validated, setValidated] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false)

  const [showInsurance, setInsurance] = useState({
    HealthInsurance: '',
    LifeInsurance: '',
    AmtlifeInsurance: 0,
    AmtHealthInsurance: 0
  })

  const ageCalculate = (DOB) => {
    const today = new Date();
    const bday = new Date(DOB);
    let age = today.getFullYear() - bday.getFullYear();
    if (today.getMonth() < bday.getMonth() ||
      (today.getMonth() === bday.getMonth() && today.getDate() < bday.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity() === false) {
      toast.error("Please fill out all required fields correctly!");
      return;
    }

    toast.success("Form filled successfully!");
    console.log("Form Data: ", formValue);
    localStorage.setItem('userFormData', JSON.stringify(formValue));
    setFormSubmitted(true);
    setValidated(true);
  };
  const handleClick = () => {
    setShowForm(true)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'DOB') {
      const calculatedAge = ageCalculate(value);
      setFormValue((prev) => ({
        ...prev,
        [name]: value,
        Age: calculatedAge
      }));
    }
    else if (name === 'insurance') {

    }
    else {
      setFormValue((prev) => ({
        ...prev,
        [name]: value
      }));
    }

  };

  return (

    <>
     <div style={{backgroundImage:`url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0AhHrpMNBK-bh_FK1T-XfxQxhoU2O7goZ-k6se5_599uqFCaaPm4SYDC0Ps1KD_fqgAs&usqp=CAU')`,height: '100vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'}} >
       <div style={{backgroundColor:'rgba(27, 27, 27, 0.521)',width:'100%',height:'100vh',color:'white'}}>
          {/* <Card className="mt-5 border-0 rounded-3">
            <Card.Body> */}
              <div className="container-fluid text-light pt-5" id='card'>
                <div className="row  d-flex justify-content-center align-items-center">
                  {/* Text Section */}
                  <div className='col-md-2'></div>
                  <div className="col-md-8 flex-column p-4">
                    <h2 className="mb-4 fw-bold text-light">
                      Struggling to Stay on Track?
                    </h2>
                    <p className="fs-5 text-light">
                      <strong className='text-light'>Turn Your Dreams Into Plans and Your Plans Into Success!<br /><br />
                      {/* <strong>Have you ever felt overwhelmed managing your monthly budget?</strong><br /> */}
                     Do you set ambitious goals but find it hard to follow through?<br />
                     Are you searching for a smarter way to achieve financial success?</strong><br /><br />
                      Don’t worry! <span className='text-light' style={{ fontWeight: 'bold' }}>We’ve got the perfect solution for you.</span> Let us guide you in setting efficient, achievable goals tailored to your needs. <strong>Success is just a step away.</strong>
                    </p>
    
                  <button className='btn' style={{ backgroundColor: '#4CAF50', color: 'white', width: '50%' }} onClick={handleClick}>
                    Start Your Journey
                  </button>
                </div>
                <div className='col-md-2'></div>
                {/* Image Section */}
                {/* <div className="col-md-6 text-center">
                  <img
                    className="rounded-3 shadow-sm"
                    // src="https://discovertemplate.com/wp-content/uploads/2020/09/DT_G33_Finance-Animated-GIF-Icon-pack.gif"
                    alt="Financial Growth GIF"
                    style={{ width: '90%', maxHeight: '350px', objectFit: 'cover' }}
                  />
                </div> */}
              </div>
            </div>
          {/* </Card.Body>
        </Card > */}
    
       </div>
        {/* user details */ }
    {
      showForm && (
       <div style={{backgroundImage:'url("https://previews.123rf.com/images/osaba/osaba1705/osaba170500026/78604345-top-view-business-office-desk-background-the-applying-for-a-job-form-and-pen-pencil-eyeglasses-tree.jpg")',backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
        <div style={{backgroundColor: 'rgba(0, 0, 0, 0.1)',}}>
            <Form 
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="p-5 mt-5"
              style={{
                borderRadius: '10px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                width: '70%', // Control form width
                maxWidth: '800px', // Max width of form
                margin: '0 auto', // Centering form horizontally
              }}
            >
              <h2 className="my-4 text-center">
                Personal Details
              </h2>
              <Row className="mb-4">
                <Form.Group as={Col} md="6" controlId="validationCustom01">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    name="Firstname"
                    required
                    type="text"
                    placeholder="Enter your first name"
                    onChange={handleChange}
                    className="rounded shadow-sm"
                    style={{
                      borderColor: '#003366',
                      width: '100%', // Ensuring full width
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationCustom02">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    name="Lastname"
                    required
                    type="text"
                    placeholder="Enter your last name"
                    onChange={handleChange}
                    className="rounded shadow-sm"
                    style={{
                      borderColor: '#003366',
                      width: '100%', // Ensuring full width
                    }}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
              </Row>
      
              <Row className="mb-4">
                <Form.Group as={Col} md="4" controlId="validationCustom03">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    name="DOB"
                    required
                    type="date"
                    onChange={handleChange}
                    className="rounded shadow-sm"
                    style={{
                      borderColor: '#003366',
                      width: '100%', // Ensuring full width
                    }}
                  />
                </Form.Group>
                <Form.Group as={Col} md="2" controlId="validationCustom03">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    name="Age"
                    type="number"
                    value={formValue.Age}
                    readOnly
                    disabled
                    style={{
                      backgroundColor: '#f5f5f5',
                      borderColor: '#ccc',
                      color: '#888',
                      cursor: 'not-allowed',
                      width: '100%', // Ensuring full width
                    }}
                  />
                </Form.Group>
      
                <Form.Group as={Col} md="3">
                  <Form.Label>Marital Status</Form.Label>
                  <div className="d-flex">
                    <Form.Check
                      onChange={handleChange}
                      inline
                      required
                      label="Single"
                      value="Single"
                      name="MaritalStatus"
                      type="radio"
                      id="single"
                      className="me-3"
                    />
                    <Form.Check
                      onChange={handleChange}
                      inline
                      label="Married"
                      value="Married"
                      name="MaritalStatus"
                      type="radio"
                      id="married"
                    />
                  </div>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} md="8" className="mb-4">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="Address"
                    required
                    placeholder="Enter your address"
                    onChange={handleChange}
                    className="rounded shadow-sm"
                    style={{
                      borderColor: '#003366',
                      width: '100%', // Ensuring full width
                    }}
                  />
                  <Form.Control.Feedback type="invalid">Please provide an address.</Form.Control.Feedback>
                </Form.Group>
              </Row>
              <hr className="my-4" />
      
              <h2 className="mb-4 text-center" >
                Financial Details
              </h2>
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="incomeField">
                  <Form.Label>Income</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      name="Income"
                      required
                      type="number"
                      min="100"
                      placeholder="Enter your income"
                      onChange={handleChange}
                      className="rounded shadow-sm"
                      style={{
                        borderColor: '#003366',
                        width: '100%', // Ensuring full width
                      }}
                    />
                    <Form.Select
                      name="IncomeType"
                      onChange={handleChange}
                      className="ms-3 rounded shadow-sm"
                      style={{
                        borderColor: '#003366',
                        width: '100%', // Ensuring full width
                      }}
                    >
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </Form.Select>
                  </div>
                </Form.Group>
              </Row>
      
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="expenseField">
                  <Form.Label>Expense</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      name="Expense"
                      required
                      type="number"
                      placeholder="Enter your expense"
                      onChange={handleChange}
                      className="rounded shadow-sm"
                      style={{
                        borderColor: '#003366',
                        width: '100%', // Ensuring full width
                      }}
                    />
                    <Form.Select
                      name="ExpenseType"
                      onChange={handleChange}
                      className="ms-3 rounded shadow-sm"
                      style={{
                        borderColor: '#003366',
                        width: '100%', // Ensuring full width
                      }}
                    >
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </Form.Select>
                  </div>
                </Form.Group>
              </Row>
      
              <Row className="mb-4">
                <Form.Group as={Col} md="12">
                  <Form.Label>Do you have any Insurance</Form.Label>
                  <div className="d-flex">
                    <Form.Check
                      onChange={handleChange}
                      inline
                      required
                      label="yes"
                      value="yes"
                      name="insurance"
                      type="radio"
                      id="yes"
                      className="me-3"
                    />
                    <Form.Check
                      onChange={handleChange}
                      inline
                      label="no"
                      value="no"
                      name="insurance"
                      type="radio"
                      id="no"
                    />
                  </div>
                </Form.Group>
              </Row>
      
              <Row className="mb-4">
                <Form.Group as={Col} md="12" controlId="investmentField">
                  <Form.Label>How much can you invest monthly?</Form.Label>
                  <Form.Control
                    name="AmtInvest"
                    required
                    type="number"
                    placeholder="Enter an amount"
                    onChange={handleChange}
                    className="rounded shadow-sm"
                    style={{
                      borderColor: '#003366',
                      width: '100%', 
                    }}
                  />
                </Form.Group>
              </Row>
      
              <Form.Group className="mb-4">
                <Form.Check required
                  label="I agree to the terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
      
              <div className="d-flex justify-content-center">
                <Button type="submit" variant="success" className="btn-lg">
                  Submit
                </Button>
              </div>
            </Form>
        </div>
       </div>
      )
    }
  
  
  
    {/* Graphical Summary */ }
    { formSubmitted && (
      <div className='d-flex flex-column align-items-center'>
      <Graphical income={formValue.Income} expense={formValue.Expense}/> 
     <Link to={{ pathname: '/goalsetting'}}>
     <button className="btn btn-success mt-4">Now Set Goals</button>
   </Link>
   </div> 
    )
     
     }
    <ToastContainer position='top-center' />
       </div>
    </>
  );
}

export default Home;
