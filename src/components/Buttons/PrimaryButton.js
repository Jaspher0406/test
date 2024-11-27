import React from 'react'
import { Button } from 'react-bootstrap'

export default function PrimaryButton({label, type, onClick}) {
  return (
    <Button type={type} onClick={onClick} className='prim-btn'>{label}</Button>
  )
}
