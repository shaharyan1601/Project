
import React, { useState } from 'react'
import './leftInvonav.css'
function LeftInfoNav({navOptions,activeIdx,setActiveIdx}) {
  // const [active, setActive] = useState(activeIdx);
  return (
    <div className='leftInfoNavContainer'>
        <ul>
          {navOptions.map((item,index)=>{
            return <li onClick={()=>setActiveIdx(index)} className={`${index==activeIdx?"infoNav-section-active":""}`}>{item}</li>
          })}
        </ul>
    </div>
  )
}

export default LeftInfoNav