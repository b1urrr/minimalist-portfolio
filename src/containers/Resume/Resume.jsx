import React from 'react';

import './resume.css';

const Resume = () => {
    return (
      <div className='pf__resume section__padding' id='resume'>
        <div class="pf__resume-card">
           <div class="pf__resume-tools">
            <div class="pf__resume-circle">
              <span class="pf__resume-circle_red pf__resume-box"></span>
            </div>
            <div class="pf__resume-circle">
              <span class="pf__resume-circle_yellow pf__resume-box"></span>
            </div>
            <div class="pf__resume-circle">
              <span class="pf__resume-circle_green pf__resume-box"></span>
            </div>
          </div>
          <div className='pf__resume-card_content'>
          <div class="pf__resume-card_content_inner">
            <p><span style={{color:'lime'}}>kristianGogov@DESKTOP-UURNJTG</span><span style={{color:'fuchsia'}}> MINGW64</span><span className='pf__resume-card_content-title'> ~</span></p>
            <p>$ <span className='pf__resume-card_content-title'>kristianGogov.get(<span style={{color:'cyan'}}>location</span>)</span></p>
            <p>"Pernik, Bulgaria"</p>
            <br></br>
            <p>$ <span className='pf__resume-card_content-title'>kristianGogov.get(<span style={{color:'cyan'}}>resume</span>)</span></p>
            <p>"Please contact me in <a href="https://www.linkedin.com/in/kristiangogov/" target="_blank"><span style={{color:'skyblue'}}>LinkedIn</span></a>."</p>
            <br></br>
            <p>$ <span className='pf__resume-card_content-title'>kristianGogov.get(<span style={{color:'cyan'}}>about</span>)</span></p>
            <p>"A seasoned graphic design professional, with 5+ years of experience, 2 of which in a Team Lead role. 
            Bringing all of my skills and expertise into web development."</p>
            <br></br>
            <p>$ <span className='pf__resume-card_content-title'>kristianGogov.get(<span style={{color:'cyan'}}>contacts</span>)</span></p>
            <p>["<a href="mailto:kristiangogow@gmail.com"><span style={{color:'skyblue'}}>kristiangogow@gmail.com</span></a>",
              "<a href="https://www.linkedin.com/in/kristiangogov/" target="_blank"><span style={{color:'skyblue'}}>LinkedIn</span></a>",
              "<a href="https://github.com/b1urrr" target="_blank"><span style={{color:'skyblue'}}>GitHub</span></a>"]</p>

            </div>
          </div>
        </div>
      </div>
  )
}

export default Resume
