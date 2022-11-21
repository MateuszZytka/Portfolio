import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../css/projects.css'
import Beer from '../../images/Beer-Meal-Buddies.png'

export default function Projects() {
    return ( 
        <Container>
        <div className='card'>
          <div>
            <h2>Beer Meal Buddies</h2>
            <p>   This project was made in collaboration with my </p>
          </div>
          <div className='image'>
            <img src={Beer} alt ='Beer and Meal pairing website' id='project1'></img>
          </div>
        </div>
      </Container>
    )
}