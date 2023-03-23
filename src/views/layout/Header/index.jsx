import React from 'react'
import { connect } from 'react-redux'
import { Dropdown, Modal, Layout, Avatar } from 'antd'
import Icon from '@/utils/Icon'
import { Link } from 'react-router-dom'
import { logout, getUserInfo } from '@/store/actions'
import FullScreen from '@/components/FullScreen'
import Settings from '@/components/Settings'
import Hamburger from '@/components/Hamburger'
import BreadCrumb from '@/components/BreadCrumb'
import './index.less'
const { Header } = Layout

const LayoutHeader = props => {
  const { token, avatar, sidebarCollapsed, logout, getUserInfo, showSettings, fixedHeader } = props
  token && getUserInfo(token)
  const handleLogout = token => {
    Modal.confirm({
      title: '注销',
      content: '确定要退出系统吗?',
      okText: '确定',
      cancelText: '取消',
      onOk: () => {
        logout(token)
      }
    })
  }

  const onClick = key => {
    switch (key) {
      case 'logout':
        handleLogout(token)
        break
      default:
        break
    }
  }

  const items = [
    {
      label: <Link to="/dashboard">首页</Link>,
      key: '0'
    },
    {
      label: (
        <a target="_blank" href="http://www.baidu.com" rel="noopener noreferrer">
          项目地址
        </a>
      ),
      key: '1'
    },
    {
      type: 'divider'
    },
    {
      label: (
        <span
          onClick={() => {
            onClick('logout')
          }}>
          注销
        </span>
      ),
      key: '3'
    }
  ]

  const computedStyle = () => {
    let styles
    if (fixedHeader) {
      if (sidebarCollapsed) {
        styles = {
          width: 'calc(100% - 80px)'
        }
      } else {
        styles = {
          width: 'calc(100% - 200px)'
        }
      }
    } else {
      styles = {
        width: '100%'
      }
    }
    return styles
  }
  return (
    <>
      {/* 这里是仿照antd pro的做法,如果固定header，
      则header的定位变为fixed，此时需要一个定位为relative的header把原来的header位置撑起来 */}
      {fixedHeader ? <Header /> : null}
      <Header style={computedStyle()} className={fixedHeader ? 'fix-header' : ''}>
        <Hamburger />
        <BreadCrumb />
        <div className="right-menu">
          <FullScreen />
          {showSettings ? <Settings /> : null}
          <div className="dropdown-wrap">
            <Dropdown menu={{ items }}>
              <div>
                <Avatar shape="square" size="medium" src={avatar} />
                <Icon name="caret-down" />
              </div>
            </Dropdown>
          </div>
        </div>
      </Header>
    </>
  )
}

const mapStateToProps = state => {
  return { ...state.app, ...state.user, ...state.settings }
}
export default connect(mapStateToProps, { logout, getUserInfo })(LayoutHeader)
