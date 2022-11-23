import React from 'react';
import Form from 'react-bootstrap/Form';
import '../../css/main.css'

export default function Contact() {
    return ( 
        <div id='contact' className='forms'>
          <h1> Contact Me </h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCompany">
        <Form.Label>Company</Form.Label>
        <Form.Control type="text" placeholder="Company" />
      </Form.Group>

      <button variant="primary" type="submit">
        Submit
      </button>
    </Form>
      </div>
    )
}