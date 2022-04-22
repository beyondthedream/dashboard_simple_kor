import React from 'react'
import "./Topbar.css"

import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

function Topbar() {
  return (
      <div className='topbar'>
          <div className="topbarWrap">
              <div className="topLeft">
                  <span className="logo">logo</span>
              </div>
              <div className="topRight">right</div>
          </div>
    </div>
  )
}

export default Topbar