import React, { useState } from 'react'
import { MenuOutlined, UserOutlined, RollbackOutlined, TagsOutlined, GlobalOutlined } from '@ant-design/icons'

export default function Header() {
  const [userDropdown, setUserDropdown] = useState(false)

  return (
    <>
      <div className='header'>
        <MenuOutlined className='menu-icon' />
        <h1>ISJI NEW FM</h1>
        <div className='user-btn' onClick={() => setUserDropdown(!userDropdown)}>
          <UserOutlined className='menu-icon' />
          {userDropdown &&
            <div className='user-dropdown'>
              <div className='dropdown-settings'>My Account <UserOutlined /></div>
              <hr />
              <div className='dropdown-settings'>News Articles <GlobalOutlined /></div>
              <div className='dropdown-settings'>Saved News <TagsOutlined /></div>
              <div className='dropdown-settings'>Logout <RollbackOutlined /></div>
            </div>
          }
        </div>
      </div>
    </>
  )
}
