import React from 'react'
import LeftNavSection from './components/LeftNavSection'
import NavTop from './components/NavTop'
import RightNavSection from './components/RightNavSection/RightNavSection'

const Navbar = () => {
    return (
      <div>
        <NavTop></NavTop>
          <header className='border-b w-full'>
            <nav className='min-h-[100px] flex items-center justify-between container mx-auto'>
               <LeftNavSection></LeftNavSection>
               <RightNavSection></RightNavSection>
            </nav>
        </header>
      </div>
    )
}

export default Navbar