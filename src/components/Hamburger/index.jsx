import React from 'react'
import { connect } from 'react-redux'
import Icon from '@/utils/Icon'
import { toggleSiderBar } from '@/store/actions'
import './index.less'

/**
 * 侧边框 展开关闭
 * @param {*} props
 * @returns
 */
const Hamburger = (props) => {
  const { sidebarCollapsed, toggleSiderBar } = props
  return (
    <div className="hamburger-container" onClick={toggleSiderBar}>
      <Icon name={sidebarCollapsed ? 'menu-unfold' : 'menu-fold'} />
    </div>
  )
}

export default connect((state) => state.app, { toggleSiderBar })(Hamburger)
