import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../../../public/wood-logo-dark.svg"
import { NavItems } from '../NavItems'
import { AiOutlineMenu,AiOutlineShoppingCart } from "react-icons/ai";
const LeftNavSection = () => {
    const navitems = NavItems
    return (
        <div className='flex items-center justify-between w-full lg:w-auto lg:justify-start'>
            <div className='block lg:hidden'>
                <p className='text-2xl px-2'><AiOutlineMenu/></p>
            </div>
            <div>
                <Link href="/"><a><Image src={logo} height={50} width={250} alt="" /></a></Link>
            </div>
            <div className='hidden lg:flex flex-wrap'>
                { navitems.map((navitem, index)=><Link key={index} href={navitem.link}><a className="font-semibold px-5">{navitem.name}</a></Link> )}
             </div>
             <div className='block lg:hidden'>
                <p className='text-3xl px-4'><AiOutlineShoppingCart/></p>
            </div>
        </div>
    )
}

export default LeftNavSection