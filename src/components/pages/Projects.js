import React from 'react';
import '../../css/main.css'
import Beer from '../../images/Beer-Meal-Buddies.png'
import Game from '../../images/Game-Hosting-Site.png'
import Vapour from '../../images/vapour screenshot.png'

export default function Projects() {
    return ( 
    <div>
      <figure class="projectBox">
        <img src= {Beer} alt="Beer" />
        <div class ="overlay">
          <div class="projectName">Beer + Meal Buddies</div>
          <p class="projectDesc">Created using HTML, CSS and JS</p>
        </div>
        <a href="https://branbao1995.github.io/Beer-Meal-Buddies/"></a>
      </figure>

      <figure class="projectBox">
        <img src= {Game} alt="Beer" />
        <div class ="overlay">
          <div class="projectName">Game Hosting Site</div>
          <p class="projectDesc">Created using HTML, CSS and JS, MySQL, Handlebars, MVC, P5.js</p>
        </div>
        <a href="https://branbao1995.github.io/Beer-Meal-Buddies/"></a>
      </figure>

      <figure class="projectBox">
        <img src= {Vapour} alt="Beer" />
        <div class ="overlay">
          <div class="projectName">Vapour</div>
          <p class="projectDesc">Created using MongoDb, Express, React, Node</p>
        </div>
        <a href="https://branbao1995.github.io/Beer-Meal-Buddies/"></a>
      </figure>
    </div>
    )
}