import React, { useState } from 'react'
import './leave.css'
import NavProfile from '../../components/NavProfile'
import InfoNavbarMV from '../../components/InfoNavbarMV'
import LeftInfoNav from '../../components/LeftInfoNav'
import LeaveApply from '../../components/Leave/leave-apply/LeaveApply'
import LeaveHistory from '../../components/Leave/leave-history/LeaveHistory'
import LeaveBalance from 'components/Leave/leave-balance/LeaveBalance'
import Calendar from '../../components/Leave/LeaveCalendar/LeaveCalendar'
import {leavesData, holidayLeavesData, teamLeavesData} from './leaveData';
function LeaveMv() {
    const [historyClicked, setHistoryClicked] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const [navOptions, setNavOptions] = useState([
        'Leave Apply',
        'Leave History',
        'Leave Balances',
        'Leave Calendar',
        'Holiday Calendar',
        'Team on Leave'
    ])
  return (
    <div className='leave-container'>
        <InfoNavbarMV currPath='leaveMv'/>
        <div className="leave-wrapper">
            <NavProfile />
            <LeftInfoNav navOptions={navOptions} activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
            {activeIdx==0 && <LeaveApply />  }
            {activeIdx==1 && <LeaveHistory />}
            {activeIdx==2 && <LeaveBalance />}
            {activeIdx==3 && <Calendar leaves={leavesData} />}
            {activeIdx==4 && <Calendar leaves={holidayLeavesData} />}
            {activeIdx==5 && <Calendar leaves={teamLeavesData} />}
            
            
        </div>
    </div>
  )
}

export default LeaveMv