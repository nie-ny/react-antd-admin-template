import React, { useEffect } from 'react'
import { Spin } from 'antd'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import './index.less'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

/**
 * 组件加载中动画
 * @returns
 */
const Loading = () => {
  useEffect(() => {
    NProgress.start()
    return () => {
      NProgress.done()
    }
  }, [])

  return (
    <div className="loading-container">
      <Spin />
    </div>
  )
}

export default Loading
