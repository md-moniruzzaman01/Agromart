import Link from 'next/link'
import React from 'react'
import { OfferItems } from '../NavItems'
import SocialIcon from './SocialIcon'

const RightNavSection = () => {
  return (
    <div className='lg:flex items-center hidden'>
        <ul className='flex'>
            <li className='px-3 font-semibold border-r'><Link  href="/offer"><a>Special Offer</a></Link></li>
            <li className='px-3 font-semibold'><Link  href="/theme"><a>Purchase Theme</a></Link></li>
            
        </ul>
        <SocialIcon></SocialIcon>
    </div>
  )
}

export default RightNavSection