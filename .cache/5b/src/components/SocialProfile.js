import React from 'react'

const SocialProfile = (props) => {
  // console.log('props.socialProfile', props.socialProfile)
  const { link, image } = props.socialProfile

  return (
    <span>
      <a href={link}>
        <img
          src={image}
          alt='social-profile'
          style={{ width: 35, height: 35, margin: 10 }}
        />
      </a>
    </span>
  )
}
export default SocialProfile
// use span to line up icons
