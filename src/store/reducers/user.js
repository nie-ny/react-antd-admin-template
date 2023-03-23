import * as types from '../action-types'
import { getToken } from '@/utils/auth'

/**
 * 用户信息
 */
const initUserInfo = {
  name: '',
  role: '',
  avatar: 'https://p3-passport.byteimg.com/img/user-avatar/8ec52702af0ada942a223bc96a299ef9~100x100.awebp',
  token: getToken() || ''
}
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token
      }
    case types.USER_SET_USER_INFO:
      return {
        ...state,
        name: action.name,
        role: action.role,
        avatar: action.avatar
      }
    case types.USER_RESET_USER:
      return {}
    default:
      return state
  }
}
