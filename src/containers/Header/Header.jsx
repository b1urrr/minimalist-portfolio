import React from 'react';
import Typed from 'react-typed';
import Resume from '../Resume/Resume';

import './button.css'
import './header.css';

const Header = () => {
  return (
    <div className='pf__header'>
        <div className='pf__header-name'>
            <Typed 
                strings={["Hi, I'm Kris."]}
                typeSpeed={50}
                showCursor={false}
                cursorChar={'█'}
                />
        </div>
        <div className='pf__header-text' id='typed-strings'>
            <p>A graphic designer evolved into a full-stack developer.</p>
        </div>
        <div className='re__header-button'>
        <a class="fancy" href="#projects">
          <span class="top-key"></span>
          <span class="text">Projects</span>
          <span class="bottom-key-1"></span>
          <span class="bottom-key-2"></span>
        </a>
        </div>
    </div>
  )
}

export default Header
