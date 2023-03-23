import * as types from '../action-types'

const initState = {
  // 是否 收起Sider 侧边栏
  sidebarCollapsed: false,
  // 是否 展开Drawer 设置框
  settingPanelVisible: false
}

export default function app(state = initState, action) {
  switch (action.type) {
    case types.APP_TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarCollapsed: !state.sidebarCollapsed
      }
    case types.APP_TOGGLE_SETTINGPANEL:
      return {
        ...state,
        settingPanelVisible: !state.settingPanelVisible
      }
    default:
      return state
  }
}
