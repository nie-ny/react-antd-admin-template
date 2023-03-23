import Loadable from 'react-loadable'
import Loading from '@/components/Loading'

/**
 * 组件地址
 */
const Dashboard = Loadable({
  loader: () => import(/*webpackChunkName:'Dashboard'*/ '@/views/dashboard'),
  loading: Loading
})
const Error404 = Loadable({ loader: () => import(/*webpackChunkName:'Bug'*/ '@/views/404'), loading: Loading })
const Menu1_1 = Loadable({ loader: () => import(/*webpackChunkName:'Menu1_1'*/ '@/views/menu1/menu1-1'), loading: Loading })
const Menu1_2_1 = Loadable({
  loader: () => import(/*webpackChunkName:'Menu1_2_1'*/ '@/views/menu1/menu1-2/menu1-2-1'),
  loading: Loading
})
const Explanation = Loadable({ loader: () => import(/*webpackChunkName:'Explanation'*/ '@/views/permission'), loading: Loading })
const AdminPage = Loadable({ loader: () => import(/*webpackChunkName:'AdminPage'*/ '@/views/permission/adminPage'), loading: Loading })
const GuestPage = Loadable({ loader: () => import(/*webpackChunkName:'GuestPage'*/ '@/views/permission/guestPage'), loading: Loading })
const EditorPage = Loadable({ loader: () => import(/*webpackChunkName:'EditorPage'*/ '@/views/permission/editorPage'), loading: Loading })
const Clipboard = Loadable({ loader: () => import(/*webpackChunkName:'Clipboard'*/ '@/views/clipboard'), loading: Loading })

/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: '首页',
    path: '/dashboard',
    icon: 'home',
    roles: ['admin', 'editor', 'guest'],
    component: Dashboard
  },
  {
    title: '路由嵌套',
    path: '/nested',
    icon: 'cluster',
    roles: ['admin', 'editor'],
    children: [
      {
        title: '菜单1',
        path: '/nested/menu1',
        children: [
          {
            title: '菜单1-1',
            path: '/nested/menu1/menu1-1',
            roles: ['admin', 'editor'],
            component: Menu1_1
          },
          {
            title: '菜单1-2',
            path: '/nested/menu1/menu1-2',
            children: [
              {
                title: '菜单1-2-1',
                path: '/nested/menu1/menu1-2/menu1-2-1',
                roles: ['admin', 'editor'],
                component: Menu1_2_1
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '权限测试',
    path: '/permission',
    icon: 'lock',
    children: [
      {
        title: '权限说明',
        path: '/permission/explanation',
        component: Explanation
      },
      {
        title: 'admin页面',
        path: '/permission/adminPage',
        roles: ['admin'],
        component: AdminPage
      },
      {
        title: 'guest页面',
        path: '/permission/guestPage',
        roles: ['guest'],
        component: GuestPage
      },
      {
        title: 'editor页面',
        path: '/permission/editorPage',
        roles: ['editor'],
        component: EditorPage
      }
    ]
  },
  {
    title: '剪贴板',
    path: '/clipboard',
    icon: 'copy',
    roles: ['admin', 'editor'],
    component: Clipboard
  },
  {
    title: 'Error404',
    path: '/error/404',
    // 不展示菜单
    unShow: true,
    component: Error404
  }
]
export default menuList
