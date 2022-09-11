import React from 'react'
import Footer from '../../../views/Footer';
import Navbar from '../../../views/Navbar';
import Header from './utilities/Head'


type LayoutChildren = {
  children: any;
  title: string;
}
const Layout = ({ children, title }: LayoutChildren) => {
  return (
    <div>
      <Header title={title}></Header>
      <div className='flex flex-col min-h-screen justify-between'>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </div>

    </div>
  )
}

export default Layout