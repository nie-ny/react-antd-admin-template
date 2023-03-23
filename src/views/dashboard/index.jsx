import React, { useState } from 'react'
import PanelGroup from './components/PanelGroup'
import TypingCard from '@/components/TypingCard'
import './index.less'

const onSetData = data => {
  console.log(data)
}

const Dashboard = () => {
  const cardContent = `
    <p>本项目是修改，<a href="https://github.com/NLRX-WJC/react-antd-admin-template">https://github.com/NLRX-WJC/react-antd-admin-template</a> 项目。</p>
    <p>技术更新太快，修改为2023年版本的项目</p>
  `

  return (
    <div className="dashboard-container">
      <PanelGroup onSetData={onSetData} />
      <TypingCard title="关于项目" source={cardContent} />
    </div>
  )
}

export default Dashboard
