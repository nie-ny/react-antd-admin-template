import React from 'react'
import {
  HomeOutlined,
  LockOutlined,
  AppstoreAddOutlined,
  BugOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  CopyOutlined,
  CaretDownOutlined,
  UserOutlined,
  MessageOutlined,
  PayCircleOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'

const Icon = ({ name, style }) => {
  switch (name) {
    case 'home':
      return <HomeOutlined />
    case 'lock':
      return <LockOutlined style={style} />
    case 'appstore':
      return <AppstoreAddOutlined />
    case 'bug':
      return <BugOutlined />
    case 'menu-fold':
      return <MenuFoldOutlined />
    case 'menu-unfold':
      return <MenuUnfoldOutlined />
    case 'setting':
      return <SettingOutlined />
    case 'fullscreen':
      return <FullscreenOutlined />
    case 'fullscreen-exit':
      return <FullscreenExitOutlined />
    case 'copy':
      return <CopyOutlined />
    case 'caret-down':
      return <CaretDownOutlined />
    case 'user':
      return <UserOutlined style={style} />
    case 'message':
      return <MessageOutlined style={style} />
    case 'pay-circle':
      return <PayCircleOutlined style={style} />
    case 'shopping-cart':
      return <ShoppingCartOutlined style={style} />

    default:
      return <></>
  }
}
export default Icon
