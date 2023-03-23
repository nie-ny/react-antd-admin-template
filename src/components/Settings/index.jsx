import React from 'react'
import { connect } from 'react-redux'
import { Tooltip } from 'antd'
import Icon from '@/utils/Icon'
import { toggleSettingPanel } from '@/store/actions'
import './index.less'

/**
 * 系统设置框 控制
 * @param {*} props
 * @returns
 */
const Settings = props => {
  const { toggleSettingPanel } = props
  return (
    <div className="settings-container">
      <Tooltip placement="bottom" title="系统设置">
        <div onClick={toggleSettingPanel}>
          <Icon name={'setting'} />
        </div>
      </Tooltip>
    </div>
  )
}

export default connect(null, { toggleSettingPanel })(Settings)
