import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MenuOutlined, UserOutlined, RollbackOutlined, TagsOutlined, GlobalOutlined } from '@ant-design/icons'

export default function Header() {
  const [userDropdown, setUserDropdown] = useState(false)
  let navigate = useNavigate();
  const onAccount = data => {
    console.log(data);
    navigate('/profile', { replace: true });
  }

  return (
    <>
      <div className='header'>
        {/* <MenuOutlined className='menu-icon' /> */}
        <h1>LOGO NEWS</h1>
        <div className='user-btn' onClick={() => setUserDropdown(!userDropdown)}>
          <UserOutlined className='menu-icon' />
          {userDropdown &&
            <div className='user-dropdown'>
              <div className='dropdown-settings' onClick={() => navigate('/profile', { replace: true })}>My Account <UserOutlined /></div>
              <hr />
              <div className='dropdown-settings' onClick={() => navigate('/dashboard', { replace: true })}>News Articles <GlobalOutlined /></div>
              <div className='dropdown-settings'>Saved News <TagsOutlined /></div>
              <div className='dropdown-settings'>Logout <RollbackOutlined /></div>
            </div>
          }
        </div>
      </div>
    </>
  )
}
