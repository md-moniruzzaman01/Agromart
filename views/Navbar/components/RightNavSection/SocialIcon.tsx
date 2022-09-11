import React from 'react'
import { SocialIcons } from '../NavItems'

const SocialIcon = () => {
    const socialicons = SocialIcons;
  return (
    <div className='flex'>
        {socialicons.map((social,index)=> <p key={index} className="text-lg p-1.5 rounded-full border-2 border-gray-300 mx-1 text-gray-400">{social.Icon}</p>)}
        
    </div>
  )
}

export default SocialIcon