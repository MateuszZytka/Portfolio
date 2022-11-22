import React from 'react';
import '../../css/main.css'
import Beer from '../../images/Beer-Meal-Buddies.png'
import Game from '../../images/Game-Hosting-Site.png'

export default function Projects() {
    return ( 
      <div className='projects'>
        <div class="wrapper">
          <div class="image-wrapper">
            <img src={Game} /></div>
          <div class="header-wrapper">
            <h1>Poster Art</h1>
            <h1>See Project</h1>
        </div>
      </div>
      
      <div class="wrapper">
        <div class="image-wrapper">
          <img class="book-design-image" src={Beer} /></div>
          <div class="header-wrapper">
            <h1>Book Design</h1>
            <h1>See Project</h1>
        </div>
      </div>
      
    </div>
    )
}