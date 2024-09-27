import React from 'react'
import { MenuOutlined, UserOutlined } from '@ant-design/icons'

export default function Header() {
  return (
    <div className='header'>
      <MenuOutlined className='menu-icon' />
      <span>SCATTER</span>
      <UserOutlined className='menu-icon' />
    </div>
  )
}
