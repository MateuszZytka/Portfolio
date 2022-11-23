import React from 'react';
import '../../css/main.css'
import LinkedIn from '../../images/linkedin.png'
import GitHub from '../../images/github.png'
import Instagram from '../../images/instagram.png'


function Footer() {
    return (
        <div className='footer'>
            <a href ="https://www.linkedin.com/in/mateusz-zytka-122b96211/"><img src ={LinkedIn} alt="LinkedIn"></img></a>
            <a href ="https://github.com/MateuszZytka"><img src ={GitHub} alt="GitHub"></img></a>
            <a href ="https://www.instagram.com/mateusz.zytka/"><img src ={Instagram} alt="Instagram"></img></a>
        </div>
    )
}

export default Footer;