import { motion } from 'framer-motion';
import * as React from 'react';
import { Form, Col, Row, Button, Container } from 'react-bootstrap';

export default function contact() {

  return (
    <motion.div initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{opacity:0}}
        >
    <Container className='pt-5 pb-5'>
      <Col ></Col>
      <Col xs={6}>

        <Form>
          <Row className="mb-3">

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Password" />
            </Form.Group>
          </Row>

          <Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              {/* <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" /> */}
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          {/* <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row> */}

            {/* <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </ Col>
      <Col ></Col>
    </Container>
    </ motion.div >
  );
}
