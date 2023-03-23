import * as types from '../action-types'
import { loginPost, logoutPost } from '@/api/login'
import { userInfoPost } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'

export const login = (username, password) => dispatch => {
  return new Promise((resolve, reject) => {
    loginPost({ username: username.trim(), password: password })
      .then(response => {
        const { data } = response
        if (data.status === 200) {
          const token = data.token
          // 保存 token
          dispatch(setUserToken(token))
          setToken(token)
          resolve(data)
        } else {
          const msg = data.message
          reject(msg)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const logout = token => dispatch => {
  return new Promise((resolve, reject) => {
    logoutPost(token)
      .then(response => {
        const { data } = response
        if (data.status === 200) {
          // 清除 token 重置用户信息
          dispatch(resetUser())
          removeToken()
          resolve(data)
        } else {
          const msg = data.message
          reject(msg)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

/**
 * 查询用户信息
 * @param {*} token
 * @returns
 */
export const getUserInfo = token => dispatch => {
  return new Promise((resolve, reject) => {
    userInfoPost(token)
      .then(response => {
        const { data } = response
        if (data.status === 200) {
          const userInfo = data.userInfo

          // 设置用户信息
          dispatch(setUserInfo(userInfo))
          resolve(data)
        } else {
          const msg = data.message
          reject(msg)
        }
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const setUserToken = token => {
  return {
    type: types.USER_SET_USER_TOKEN,
    token
  }
}

export const setUserInfo = userInfo => {
  return {
    type: types.USER_SET_USER_INFO,
    ...userInfo
  }
}

export const resetUser = () => {
  return {
    type: types.USER_RESET_USER
  }
}
