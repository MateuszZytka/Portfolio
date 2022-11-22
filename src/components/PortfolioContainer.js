import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './pages/Header';

import '../css/main.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header></Header>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs />
      <div className='pages'>
      <About />
      <Projects />
      <Contact />
      <Resume />
      {/* Here we are calling the renderPage method which will return a component  */}
      </div>
    </div>
  );
}