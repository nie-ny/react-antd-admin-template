import { login, logout, getUserInfo, setUserToken, setUserInfo, resetUser } from './user'
import { toggleSiderBar, toggleSettingPanel } from './app'
import { changeSetting } from './settings'
import { addTag, emptyTaglist, deleteTag, closeOtherTags } from './tagsView'

export {
  login,
  logout,
  getUserInfo,
  setUserToken,
  setUserInfo,
  resetUser,
  // 系统 store 操作
  toggleSiderBar,
  toggleSettingPanel,
  changeSetting,
  addTag,
  emptyTaglist,
  deleteTag,
  closeOtherTags
}
