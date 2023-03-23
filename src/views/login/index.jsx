import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Input, Button, message, Spin } from 'antd'
import Icon from '@/utils/Icon'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'
import './index.less'
import { login, getUserInfo } from '@/store/actions'

const Login = props => {
  const { token, login, getUserInfo } = props

  if (token) {
    // 重定向 路由到首页
    return <Redirect to="/dashboard" />
  }
  // 表单
  const formRef = React.useRef(null)
  const [loading, setLoading] = useState(false)

  // 点击登陆
  const handleLogin = (username, password) => {
    // 登录完成后 发送请求 调用接口获取用户信息
    setLoading(true)
    login(username, password)
      .then(data => {
        message.success('登录成功')
        handleUserInfo(data.token)
      })
      .catch(error => {
        setLoading(false)
        message.error(error)
      })
  }

  // 获取用户信息
  const handleUserInfo = token => {
    getUserInfo(token)
      .then(data => {})
      .catch(error => {
        message.error(error)
      })
  }

  /**
   * 表单提交
   * @param {1} val
   */
  const handleSubmit = val => {
    // 对所有表单字段进行检验
    formRef.current
      .validateFields()
      .then(values => {
        const { username, password } = values
        handleLogin(username, password)
      })
      .catch(() => {
        console.log('检验失败!')
      })
  }

  return (
    <DocumentTitle title={'用户登录'}>
      <div className="login-container">
        <Form ref={formRef} onFinish={handleSubmit} className="content">
          <div className="title">
            <h2>用户登录</h2>
          </div>
          <Spin spinning={loading} tip="登录中...">
            <Form.Item
              name="username"
              initialValue="admin"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '请输入用户名'
                }
              ]}>
              <Input prefix={<Icon name="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name="password"
              initialValue="123456"
              rules={[
                {
                  required: true,
                  whitespace: true,
                  message: '请输入密码'
                }
              ]}>
              <Input prefix={<Icon name="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登录
              </Button>
            </Form.Item>
            <Form.Item>
              <span>账号 : admin 密码 : 随便填</span>
              <br />
              <span>账号 : editor 密码 : 随便填</span>
              <br />
              <span>账号 : guest 密码 : 随便填</span>
            </Form.Item>
          </Spin>
        </Form>
      </div>
    </DocumentTitle>
  )
}

export default connect(state => state.user, { login, getUserInfo })(Login)
