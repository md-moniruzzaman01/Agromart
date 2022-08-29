import React from 'react'
import Head from 'next/head'
const Header = ({title}:{title:string}) => {
  return (
    <Head>
    <title>{title? title: 'AgroMart'}</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  )
}

export default Header