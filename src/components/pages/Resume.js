import React from 'react';
import ResumeDownload from '../../images/Resume -Mateusz Zytka.pdf'

export default function Resume() {
    return ( 
        <div id='resume' className='resume'>
          <h2>Click to download my Resume</h2>
        <a href={ResumeDownload} download> <button>Download</button>  </a>
      </div>
    )
}