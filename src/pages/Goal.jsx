import React, { useState } from 'react';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import CrorepatiCalc from '../components/CrorepatiCalc'; // Assuming this is your calculator component
import { useLocation } from 'react-router-dom';


function Goal() {
  const [goalTitle, setGoalTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [tenure, setTenure] = useState('');
  const [rateOfReturn, setRateOfReturn] = useState('');
  const [goals, setGoals] = useState([]);
  const [customSelect, SetCustomSelect] = useState(false)
  const [selectedCalculator, setSelectedCalculator] = useState(null); // Track the selected calculator
  
  const location = useLocation()
  console.log(location);
  const { amtInvest } = location.state || {};

  const customCalc = ()=>{
    SetCustomSelect(true)
  }

  const handleClick = (selectedTitle) => {
    setGoalTitle(selectedTitle); // Set the goal title when a button is clicked

    // Set the appropriate calculator component based on the selected title
    if (selectedTitle === "Crorepati") {
      setSelectedCalculator(<CrorepatiCalc />);
    } else if (selectedTitle === "Buy a House") {
      setSelectedCalculator(<CrorepatiCalc />);
    } else if (selectedTitle === "Plan a Vacation") {
      setSelectedCalculator(<CrorepatiCalc />);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!goalTitle || !targetAmount || !tenure || !rateOfReturn) {
      alert('Please fill out all fields!');
      return;
    }

    const newGoal = {
      title: goalTitle,
      amount: parseFloat(targetAmount),
      tenure: parseFloat(tenure),
      rate: parseFloat(rateOfReturn),
    };

    setGoals([...goals, newGoal]);

    setGoalTitle('');
    setTargetAmount('');
    setTenure('');
    setRateOfReturn('');
  };

  return (
    <Container className="py-4">
      <h2 className="mb-3 text-center">Set Your Financial Goals</h2>
      <h5 className="mb-5 text-muted text-center">
        Define your goals and let us guide you toward achieving them with smart investment plans.
      </h5>

      <Row className="g-4">
        <Col md={4} sm={6}>
          <Button onClick={() => handleClick("Crorepati")}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Become a Crorepati</Card.Title>
                <Card.Text>
                  Start investing wisely to achieve your dream financial milestone.
                </Card.Text>
              </Card.Body>
            </Card>
          </Button>
        </Col>

        <Col md={4} sm={6}>
          <Button onClick={() => handleClick("Buy a House")}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Buy a House</Card.Title>
                <Card.Text>
                  Let us help you make your dream of owning a house a reality.
                </Card.Text>
              </Card.Body>
            </Card>
          </Button>
        </Col>

        <Col md={4} sm={6}>
          <Button onClick={() => handleClick("Plan a Vacation")}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Plan a Vacation</Card.Title>
                <Card.Text>
                  Save and invest smartly for a dream getaway with your loved ones.
                </Card.Text>
              </Card.Body>
            </Card>
          </Button>
        </Col>
      </Row>

      <Row className='mt-3'>
        <Col md={4}></Col>
        <Col md={4} sm={6}>
          <Button onClick={customCalc}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fw-bold mb-3">Create a Custom Goal</Card.Title>
                <Card.Text>
                  Start investing wisely to achieve your dream milestone.
                </Card.Text>
              </Card.Body>
            </Card>
          </Button>
        </Col>
        <Col md={4}></Col>
      </Row>

      {/* Display the selected calculator based on the goal title */}
      <div style={{ textAlign: 'center', padding: '20px' }}>
        {selectedCalculator && (
          <div>
            <h2>{goalTitle} Goal Calculator</h2>
            {selectedCalculator} {/* Display the appropriate calculator component */}
          </div>
        )}

        {/* Custom Goal Form */}
       {customSelect && <div style={{ marginTop: '30px' }}>
          <h3>Set Your Custom Goal</h3>
          <form onSubmit={handleSubmit} style={{ display: 'inline-block', textAlign: 'left' }}>
            <div style={{ marginBottom: '10px' }}>
              <label>Goal Title:</label>
              <input
                type="text"
                value={goalTitle}
                onChange={(e) => setGoalTitle(e.target.value)}
                placeholder="Enter goal title"
                style={{ marginLeft: '10px', padding: '5px', width: '200px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Target Amount (₹):</label>
              <input
                type="number"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
                placeholder="Enter target amount"
                style={{ marginLeft: '10px', padding: '5px', width: '200px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Tenure (years):</label>
              <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                placeholder="Enter tenure in years"
                style={{ marginLeft: '10px', padding: '5px', width: '200px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label>Rate of Return (%):</label>
              <input
              disabled
                type="number"
                value={rateOfReturn}
                onChange={(e) => setRateOfReturn(e.target.value)}
                // placeholder="Enter expected rate of return"
                style={{ marginLeft: '10px', padding: '5px', width: '200px' }}
              />
            </div>
            <button type="submit" style={{ marginTop: '10px', padding: '5px 20px' }}>
              Save Goal
            </button>
          </form>
        </div>}

        {/* Display saved goals */}
        <div style={{ marginTop: '30px' }}>
          <h3>Saved Goals</h3>
          {goals.length === 0 ? (
            <p>No goals set yet.</p>
          ) : (
            <table
              border="1"
              style={{
                margin: '0 auto',
                width: '80%',
                borderCollapse: 'collapse',
                textAlign: 'center',
              }}
            >
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Target Amount (₹)</th>
                  <th>Tenure (years)</th>
                  <th>Rate of Return (%)</th>
                </tr>
              </thead>
              <tbody>
                {goals.map((goal, index) => (
                  <tr key={index}>
                    <td>{goal.title}</td>
                    <td>{goal.amount.toLocaleString()}</td>
                    <td>{goal.tenure}</td>
                    <td>{goal.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Goal;
