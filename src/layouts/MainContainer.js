import React from 'react'
import { Container } from 'react-bootstrap'

function MainContainer({children}) {
  return (
    <Container fluid className='main-container'>
      {children}
    </Container>
  )
}

export default MainContainer