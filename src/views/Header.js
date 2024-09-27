import React, { useState } from 'react'
import { MenuOutlined, UserOutlined } from '@ant-design/icons'

export default function Header() {
  const [userDropdown, setUserDropdown] = useState(false)

  return (
    <>
      <div className='header'>
        <MenuOutlined className='menu-icon' />
        <span>PAGE NI ISJI</span>
        <div className='user-btn' onClick={() => setUserDropdown(!userDropdown)}>
          <UserOutlined className='menu-icon' />
          {userDropdown &&
            <div className='user-dropdown'>
              <div className='dropdown-settings'>My Account</div>
              <hr />
              <div className='dropdown-settings'>News Articles</div>
              <div className='dropdown-settings'>Saved News</div>
              <div className='dropdown-settings'>Logout</div>
            </div>
          }
        </div>
      </div>
    </>
  )
}
