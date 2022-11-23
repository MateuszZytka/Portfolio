import NavTabs from './NavTabs';
import Projects from './pages/Projects';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './pages/Header';
import Footer from './pages/Footer';

import '../css/main.css'

export default function PortfolioContainer() {

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
      <Footer /> 
      {/* Here we are calling the renderPage method which will return a component  */}
      </div>
    </div>
  );
}
