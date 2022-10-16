import React from 'react'

export const ContactProfilePhoto = ({imageUrl}) => {
  return (
    <div className="contact-profile">
        <img src={imageUrl} alt="Profile Photo" />
    </div>
  )
}
