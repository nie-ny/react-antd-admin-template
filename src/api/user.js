import request from '@/utils/request'

export function userInfoPost(data) {
  return request({
    url: '/userInfo',
    method: 'post',
    data
  })
}

export function getUsers() {
  return request({
    url: '/user/list',
    method: 'get'
  })
}

export function validatUserIDPost(data) {
  return request({
    url: '/user/validatUserID',
    method: 'post',
    data
  })
}
