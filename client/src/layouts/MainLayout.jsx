import React from 'react'
import Navbar from '../components/Navbar'

const MainLayout = ({children}) => {

  return (
    <>
      <header><Navbar /> </header>

      <main className='container'>
        {children}
      </main>

      <footer className='footer'>
        <p>© 2026 CampusConnect. All Rights Reserved.</p>
      </footer>
    </>
  )
}

export default MainLayout