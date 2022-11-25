import React from 'react';
import ResumeDownload from '../../images/Resume -Mateusz Zytka.pdf'

export default function Resume() {
    return ( 
        <div id='resume' className='resume'>
          
        <div className='technologies'>
          <div className='front'>
            <h2>Front End Technologies and Frameworks</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Bulma</li>
              <li>Bootstrap</li>
              <li>Jquery</li>
              <li></li>
            </ul>
          </div>
          <div className='back'>
            <h2>Back End Technolgies</h2>
            <ul>
              <li>Express</li>
              <li>SQL</li>
              <li>NoSQL</li>
              <li>MongoDB</li>
              <li>Node.JS</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
        <h2>Click to download my Resume</h2>
        <a href={ResumeDownload} download> <button>Download</button>  </a>
      </div>
    )
}