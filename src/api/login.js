import request from '@/utils/request'

export function loginPost(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function logoutPost(data) {
  return request({
    url: '/logout',
    method: 'post',
    data
  })
}
