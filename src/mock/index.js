import Mock from 'mockjs'
import loginAPI from './login'

// 登录与用户相关
Mock.mock(/\/login/, 'post', loginAPI.login)
Mock.mock(/\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/userInfo/, 'post', loginAPI.userInfo)
Mock.mock(/\/user\/list/, 'get', loginAPI.getUsers)
Mock.mock(/\/user\/validatUserID/, 'post', loginAPI.ValidatUserID)

export default Mock
