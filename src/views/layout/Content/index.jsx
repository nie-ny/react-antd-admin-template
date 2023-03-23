import React from 'react'
import { Redirect, withRouter, Route, Switch } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import { connect } from 'react-redux'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Layout } from 'antd'
import { getMenuItemInMenuListByProperty } from '@/utils'
import menuList from '@/config/menuConfig'
const { Content } = Layout

/**
 * 获取当前路径下的路由信息
 * @param {*} menuList
 * @param {*} pathname
 * @returns
 */
const getPageTitle = (menuList, pathname) => {
  let title = ''
  const item = getMenuItemInMenuListByProperty(menuList, 'path', pathname)

  if (item) {
    title = `${item.title}`
  }
  return title
}

/**
 * 获取
 * @param {*} menuList
 * @param {*} role
 * @returns
 */
const getRouteNodes = (menuList, role) => {
  return menuList.reduce((pre, item) => {
    // 是否有子集
    if (!item.children) {
      // 存在组件 并且有权限
      if (item.component && (!item.roles || item.roles.includes(role))) {
        pre.push(item)
      }
    } else {
      pre = pre.concat(getRouteNodes(item.children, role))
    }
    return pre
  }, [])
}

const LayoutContent = props => {
  const { role, location } = props
  const { pathname } = location
  const routeList = getRouteNodes(menuList, role)

  return (
    <DocumentTitle title={getPageTitle(menuList, pathname)}>
      <Content style={{ height: 'calc(100% - 100px)' }}>
        <TransitionGroup>
          <CSSTransition key={location.pathname} timeout={500} classNames="fade" exit={false}>
            <Switch location={location}>
              <Redirect exact from="/" to="/dashboard" />
              {routeList.map(route => {
                return <Route component={route.component} key={route.path} path={route.path} />
              })}
              <Redirect to="/error/404" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Content>
    </DocumentTitle>
  )
}

export default connect(state => state.user)(withRouter(LayoutContent))
