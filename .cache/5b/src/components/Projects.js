import React from 'react'
import PROJECTS from '../data/projectsData'
import Project from './Project'

const Projects = () => (
  <div>
    <h2>Highlighted Projects</h2>
    <div>
      {PROJECTS.map((PROJECT) => (
        <Project key={PROJECT.id} project={PROJECT} />
      ))}
    </div>
  </div>
)

export default Projects

// even getting rid or return keyword, returning directly, inline return replacing {} with (), both with fn body and mapping.
