import React from 'react'

const Project = props => {
  const { title, image, description, link } = props.project
  // same as {props.project.title} etc
  console.log('props.project', props.project)

  return (
    <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
      <a href={link} style={{ textDecoration: 'none' }}><h3>{title}</h3>
        <img src={image} alt='social profile' style={{ width: 200, height: 120 }} />
        <p>{description}</p></a>
    </div>
  )
}
export default Project

// return (
//     <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
//       <h3>{title}</h3>
//       <img src={image} alt='profile' style={{ width: 200, height: 120 }} />
//       <p>{description}</p>
//       <a href={link}>{link}</a>
//     </div>
//   )
