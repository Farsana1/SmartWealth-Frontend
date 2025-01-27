import React, { useState } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

function CrorepatiCalc() {
  const [formValue, setFormValue] = useState({
    currentSavings: "",
    monthlyInvestment: "",
    annualReturns: "",
    years: "",
    targetAmount: 10000000, // 1 Crore
  });
  const [goalAchieved, setGoalAchieved] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const calculateGoal = (e) => {
    e.preventDefault();

    const { currentSavings, monthlyInvestment, annualReturns, years } = formValue;

    if (!currentSavings || !monthlyInvestment || !annualReturns || !years) {
      alert("Please fill all fields!");
      return;
    }

    const annualRate = annualReturns / 100;
    const months = years * 12;
    let futureValue = parseFloat(currentSavings);

    // Loop for each month to calculate the compound growth
    for (let month = 1; month <= months; month++) {
      futureValue += parseFloat(monthlyInvestment);
      futureValue += (futureValue * annualRate) / 12; // Compound interest monthly
    }

    // Check if goal is achieved
    if (futureValue >= formValue.targetAmount) {
      setGoalAchieved(true);
    } else {
      setGoalAchieved(false);
    }
  };

  return (
    <div className="container mt-5">
      
      <Form noValidate onSubmit={calculateGoal}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Current Savings</Form.Label>
            <Form.Control
              type="number"
              name="currentSavings"
              value={formValue.currentSavings}
              onChange={handleChange}
              placeholder="Enter your current savings"
              required
            />
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Monthly Investment</Form.Label>
            <Form.Control
              type="number"
              name="monthlyInvestment"
              value={formValue.monthlyInvestment}
              onChange={handleChange}
              placeholder="Enter your monthly investment"
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>Expected Annual Returns (%)</Form.Label>
            <Form.Control
            disabled
              type="number"
              name="annualReturns"
              value={formValue.annualReturns}
              onChange={handleChange}
              // placeholder="Enter expected annual returns"
              required
            />
          </Form.Group>

          <Form.Group as={Col} md="6">
            <Form.Label>Investment Period (Years)</Form.Label>
            <Form.Control
              type="number"
              name="years"
              value={formValue.years}
              onChange={handleChange}
              placeholder="Enter number of years"
              required
            />
          </Form.Group>
        </Row>

        <Button type="submit" variant="primary" className="mt-3">
          Calculate
        </Button>
      </Form>

      {goalAchieved !== null && (
        <Alert variant={goalAchieved ? "success" : "danger"} className="mt-4">
          {goalAchieved
            ? "Congratulations! You will achieve your goal of 1 Crore!"
            : "You will not achieve your goal of 1 Crore with the current inputs."}
        </Alert>
      )}
    </div>
  );
}

export default CrorepatiCalc;
