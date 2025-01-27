import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function GuidePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <h1>Welcome to Smart Wealth Solutions</h1>
          <p className="lead">
            Achieve your financial goals effortlessly by using our innovative tools and resources.
          </p>
        </Container>
      </section>

      {/* Step-by-Step Guide Section */}
      <section className="steps-section">
        <Container>
          <h2>How to Use Smart Wealth Solutions</h2>
          <Row className="g-4">
            {/* Step 1 */}
            <Col md={4}>
              <Card className="step-card shadow-sm">
                <Card.Body>
                  <Card.Title>Step 1: Sign Up</Card.Title>
                  <Card.Text>
                    Create an account by providing your basic details. It’s quick and easy!
                  </Card.Text>
                  <Button variant="primary">Sign Up</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Step 2 */}
            <Col md={4}>
              <Card className="step-card shadow-sm">
                <Card.Body>
                  <Card.Title>Step 2: Choose Your Goals</Card.Title>
                  <Card.Text>
                    Select your financial goals, such as savings, investment, and retirement planning.
                  </Card.Text>
                  <Button variant="primary">Select Goals</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Step 3 */}
            <Col md={4}>
              <Card className="step-card shadow-sm">
                <Card.Body>
                  <Card.Title>Step 3: Start Investing</Card.Title>
                  <Card.Text>
                    Based on your goals, start investing through a range of pre-selected options.
                  </Card.Text>
                  <Button variant="primary">Start Investing</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center">
        <Container>
          <h2>Ready to start your journey to financial success?</h2>
          <p>
            Join Smart Wealth Solutions today and take the first step towards achieving your financial freedom.
          </p>
          <Button variant="primary" size="lg">
            Join Now
          </Button>
        </Container>
      </section>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <p>© 2025 Smart Wealth Solutions. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default GuidePage;
