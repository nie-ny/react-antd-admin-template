import React from 'react'
import TypingCard from '@/components/TypingCard'

const Index = () => {
  const cardContent = `
    本项目中的菜单权限和路由权限都是基于用户所属角色来分配的，本项目中内置了三种角色，分别是：
    
    <ul>
      <li>管理员 admin:该角色拥有系统内所有菜单和路由的权限。</li>
      <li>编辑员 editor:该角色拥有系统内除用户管理页之外的所有菜单和路由的权限。</li>
      <li>游客 guest:该角色仅拥有Dashboard、作者博客、权限测试和关于作者三个页面的权限。</li>
    </ul>
  `

  return (
    <div className="page-container">
      <TypingCard title="权限说明" source={cardContent} />
    </div>
  )
}

export default Index
