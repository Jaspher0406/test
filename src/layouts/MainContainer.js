import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../views/Header'
import Footer from '../views/Footer'

function MainContainer({children}) {
  return (
    <Container fluid className='main-container'>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </Container>
  )
}

export default MainContainer