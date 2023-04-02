import React from 'react';
import { Project } from '../../components';
import projectCard from './imports';

import './projects.css';

const Projects = () => {
  return (
    <div className='pf__projects section__padding' id='projects'>
      <div className='pf__projects-header'>
      <h1>Projects</h1>
      </div>
      <div className='pf__projects-cards'>

      {projectCard.map((item) =>
        <div className='pf__projects-cards_item'>
          <Project
            imgurl={item.imgurl}
            url={item.url} 
            name={item.name} 
            desc={item.desc} 
            stack={item.stack}
            github={item.github} 
            key={item.id} />
        </div>
      )}

      </div>
    </div>
  )
}

export default Projects