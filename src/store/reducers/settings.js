import * as types from '../action-types'
import defaultSettings from '@/defaultSettings'
const { showSettings, sidebarLogo, fixedHeader, tagsView } = defaultSettings

const initState = {
  // 是否展示 系统设置按钮
  showSettings: showSettings,
  // 是否展示 Logo
  sidebarLogo: sidebarLogo,
  // 是否 固定顶部
  fixedHeader: fixedHeader,
  // 是否 展示tags栏
  tagsView: tagsView
}
export default function settings(state = initState, action) {
  switch (action.type) {
    case types.SETTINGS_CHANGE_SETTINGS:
      const { key, value } = action
      if (state.hasOwnProperty(key)) {
        return {
          ...state,
          [key]: value
        }
      }
      return state
    default:
      return state
  }
}
