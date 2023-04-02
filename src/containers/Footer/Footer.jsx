import React from 'react';
import './footer.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { HiOutlineAtSymbol } from 'react-icons/hi'

const year = new Date().getFullYear()

function Footer() {

    return (
      <div className='pf__footer'>
        <div className='pf__footer-content'>
          <div className='pf__footer-content_socials'>
            <a href='https://github.com/b1urrr' target='_blank'><BsGithub size={27} />GitHub</a>
            <a href='https://www.linkedin.com/in/kristiangogov' target='_blank'><BsLinkedin size={27} />LinkedIn</a>
            <a href='mailto:kristiangogow@gmail.com'><HiOutlineAtSymbol size={27} />Email</a>
          </div>
          <div className='pf__footer-copyright'>
           <p>©{year} Kristian Gogov</p>
          </div>
        </div>

      </div>
    )
  }

export default Footer;