import React, { useState } from 'react'
import './leave.css'
import NavProfile from '../../components/NavProfile'
import InfoNavbarHR from '../../components/InfoNavbarHR'
import LeftInfoNav from '../../components/LeftInfoNav'
import LeaveApply from '../../components/Leave/leave-apply/LeaveApply'
import LeaveHistory from '../../components/Leave/leave-history/LeaveHistory'
import LeaveBalance from 'components/Leave/leave-balance/LeaveBalance'
import Calendar from '../../components/Leave/LeaveCalendar/LeaveCalendar'
import {leavesData, holidayLeavesData, teamLeavesData} from './leaveData';
function LeaveHR() {
    const [historyClicked, setHistoryClicked] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const [navOptions, setNavOptions] = useState([
        'Leave Apply',
        'Leave Balances',
        'Leave Calendar',
        'Holiday Calendar',
        'Team on Leave'
    ])
  return (
    <div className='leave-container'>
        <InfoNavbarHR currPath='leaveHR'/>
        <div className="leave-wrapper">
            <NavProfile />
            <LeftInfoNav navOptions={navOptions} activeIdx={activeIdx} setActiveIdx={setActiveIdx} />
            {activeIdx==0 && (historyClicked?<LeaveHistory setHistoryClicked={setHistoryClicked}/>:<LeaveApply setHistoryClicked={setHistoryClicked} /> ) }
            {activeIdx==1 && <LeaveBalance />}
            {activeIdx==2 && <Calendar leaves={leavesData} />}
            {activeIdx==3 && <Calendar leaves={holidayLeavesData} />}
            {activeIdx==4 && <Calendar leaves={teamLeavesData} />}
            
            
        </div>
    </div>
  )
}

export default LeaveHR