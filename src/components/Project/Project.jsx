import React from 'react';

import './project.css';

const Project = ({ imgurl, url, name, desc, stack }) => {
  return (
    <div className='pf__project'>
        <div className='pf__project-card'>
            <img src={imgurl} class='pf__project-card_img' alt=''/>
        <div class='pf__project-card_body'>
            <h1 class='pf__project-card_title'>{name}</h1>
            <p class='pf__project-card_sub-title'>{desc}</p>
            <p class='pf__project-card_info'>{stack}</p>
            <div className='pf__project-card_body-buttons'>
            <a href={url} target='_blank'><button class='pf__project-card_btn'>View Project</button></a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Project
