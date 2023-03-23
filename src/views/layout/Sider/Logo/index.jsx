import React from 'react'
import { connect } from 'react-redux'
import logo from '@/assets/images/logo.svg'
import './index.less'

const Logo = (props) => {
  const { sidebarCollapsed } = props
  return (
    <div className="sidebar-logo-container">
      <img src={logo} className="sidebar-logo" alt="logo" />
      {!sidebarCollapsed && <h1 className="sidebar-title">React</h1>}
    </div>
  )
}

export default connect((state) => state.app)(Logo)
