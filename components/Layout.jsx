import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>KARMA | SHOP RITUALITIC AND SPIRITUAL GOODS</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className='maon-container'>
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div> 
  )
}

export default Layout