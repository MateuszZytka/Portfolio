import React from 'react';
import '../../css/main.css'
import Beer from '../../images/Beer-Meal-Buddies.png'
import Game from '../../images/Game-Hosting-Site.png'

export default function Projects() {
    return ( 
      <div id='projects' className='projects'>
        <div className="wrapper">
          <div className="image-wrapper">
            <img src={Game} alt='game hosting website' /></div>
          <div className="header-wrapper">
            <h1>Poster Art</h1>
            <h1>See Project</h1>
        </div>
      </div>
      
      <div className="wrapper">
        <div className="image-wrapper">
          <img className="book-design-image" src={Beer} alt='beer and food pairing website' /></div>
          <div className="header-wrapper">
            <h1>Book Design</h1>
            <h1>See Project</h1>
        </div>
      </div>
      
    </div>
    )
}