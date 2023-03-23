const tokens = {
  admin: 'admin-token',
  editor: 'editor-token',
  guest: 'guest-token'
}

const users = {
  'admin-token': {
    id: 'admin',
    role: 'admin',
    name: '测试管理员',
    avatar: 'https://p3-passport.byteimg.com/img/user-avatar/8ec52702af0ada942a223bc96a299ef9~100x100.awebp',
    description: '拥有系统内所有菜单和路由权限'
  },
  'editor-token': {
    id: 'editor',
    role: 'editor',
    name: '测试编辑员',
    avatar: 'https://p3-passport.byteimg.com/img/user-avatar/0dc3ba548924dd50f1d48833d16b537e~180x180.awebp',
    description: '可以看到除户管理页面之外的所有页面'
  },
  'guest-token': {
    id: 'guest',
    role: 'guest',
    name: '测试普通用户',
    avatar: 'https://p3-passport.byteimg.com/img/user-avatar/d3348076fae9542b6c4dc11c5fced3ea~180x180.awebp',
    description: ''
  }
}

export default {
  // 登陆
  login: config => {
    const { username } = JSON.parse(config.body)
    const token = tokens[username]
    if (!token) {
      return {
        status: 1,
        message: '用户名或密码错误'
      }
    }
    return {
      status: 200,
      token
    }
  },
  // 用户信息
  userInfo: config => {
    const token = config.body
    const userInfo = users[token]
    if (!userInfo) {
      return {
        status: 1,
        message: '获取用户信息失败'
      }
    }
    return {
      status: 200,
      userInfo
    }
  },
  // 所有用户信息
  getUsers: () => {
    return {
      status: 200,
      users: Object.values(users)
    }
  },

  // 验证tokens
  ValidatUserID: config => {
    const userID = config.body
    const token = tokens[userID]
    if (token) {
      return {
        status: 1
      }
    } else {
      return {
        status: 200
      }
    }
  },
  // 退出
  logout: _ => {
    return {
      status: 200,
      data: 'success'
    }
  }
}
