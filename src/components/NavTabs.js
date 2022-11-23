import React from 'react';
import '../css/main.css'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div className='sidebar'>
      
      <ul className="navitems"> 
      {/* <li><h3 className='nav-header'>Navigation</h3></li> */}
        <li>
        
          <button
            href="#about"
            onClick={() => handlePageChange('About')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'About' ? 'button-active' : ''}
          >
            About Me
          </button>
          {/* </ScrollLink> */}
        </li>
        <li>
          <button 
            href="#projects"
            onClick={() => handlePageChange('Projects')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Projects' ? 'button-active' : ''}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'button-active' : ''}
          >
            Contact
          </button>
        </li>
        <li>
          <button
            href="#resume"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'resume' ? 'button-active' : ''}
          >
            Resume
          </button>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
