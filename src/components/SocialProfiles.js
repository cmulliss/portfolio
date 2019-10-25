import React from 'react'
import SOCIAL_PROFILES from '../data/socialProfilesData'
// access the array
import SocialProfile from './SocialProfile'

const SocialProfiles = () => (
  <div>
    <h2>Connect with me!</h2>
    <div>
      {
        SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
          return <SocialProfile key={SOCIAL_PROFILE.id}
            socialProfile={SOCIAL_PROFILE} />
        })
      }
    </div>
  </div>
)

export default SocialProfiles

// the map fn takes a callback, this callback has one parameter, SOCIAL_PROFILE, for each one return a SOCIAL_PROFILE component.
