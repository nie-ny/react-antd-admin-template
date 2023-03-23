import React, { Component } from 'react'
import { Menu } from 'antd'
import Icon from '@/utils/Icon'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addTag } from '@/store/actions'
import { getMenuItemInMenuListByProperty } from '@/utils'
import menuList from '@/config/menuConfig'
import './index.less'

function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children
  }
}

// 修改侧边栏 顺序
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

class Meun extends Component {
  state = {
    menuTreeNode: [],
    openKey: []
  }

  componentDidMount() {
    const menuTreeNode = this.getMenuNodes(menuList)
    this.setState({
      menuTreeNode
    })
    this.handleMenuSelect(this.state.openKey)
  }

  // 根据用户role属性 判断侧边框权限
  filterMenuItem = item => {
    const { roles } = item
    const { role } = this.props
    if (item.unShow) {
      return false
    }

    if (!roles || roles.includes(role)) {
      return true
    } else if (item.children) {
      // 如果当前用户有此item的某个子item的权限
      return !!item.children.find(child => roles.includes(child.role))
    }
    return false
  }

  // 菜单渲染
  getMenuNodes = menuList => {
    // 得到当前请求的路由路径
    const path = this.props.location.pathname
    return menuList.reduce((pre, item) => {
      if (this.filterMenuItem(item)) {
        if (!item.children) {
          pre.push(
            getItem(
              <Link to={item.path}>
                <span>{item.title}</span>
              </Link>,
              item.path,
              <Icon name={item.icon} />
            )
          )
        } else {
          // 查找一个与当前请求路径匹配的子Item
          const cItem = item.children.find(cItem => path.indexOf(cItem.path) === 0)
          // 如果存在, 说明当前item的子列表需要打开
          if (cItem) {
            this.setState(state => ({
              openKey: [...state.openKey, item.path]
            }))
          }
          // 向pre添加
          pre.push(getItem(<span>{item.title}</span>, item.path, <Icon name={item.icon} />, [...this.getMenuNodes(item.children)]))
        }
      }

      return pre
    }, [])
  }

  // 拖拽结束
  onDragEnd = result => {
    if (!result.destination) {
      return
    }
    const _items = reorder(this.state.menuTreeNode, result.source.index, result.destination.index)
    this.setState({
      menuTreeNode: _items
    })
  }

  // 选中栏
  handleMenuSelect = ({ key = '/dashboard' }) => {
    let menuItem = getMenuItemInMenuListByProperty(menuList, 'path', key)
    this.props.addTag(menuItem)
  }

  render() {
    // 当前选中的菜单项 key 数组
    const path = this.props.location.pathname
    // 默认选中的侧边框
    const openKey = this.state.openKey
    const { menuTreeNode = [] } = this.state

    return (
      <div className="sidebar-menu-container">
        {menuTreeNode.length > 0 && (
          <Menu
            mode="inline"
            theme="dark"
            onSelect={this.handleMenuSelect}
            selectedKeys={[path]}
            defaultOpenKeys={openKey}
            items={menuTreeNode}></Menu>
        )}
      </div>
    )
  }
}

export default connect(
  state => {
    return { ...state.user }
  },
  { addTag }
)(withRouter(Meun))
