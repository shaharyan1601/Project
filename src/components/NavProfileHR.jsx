import React from 'react'
import dp from './Picture1.png'
import './navProfile.css'

function NavProfileHR() {
  return (
    <div className="user-info-wrapper">
        <div className="user-info">
            <div className="user-pic">
                <img src={dp} alt="" />
            </div>
            <div className="user-data">
                <h1>Arthi Sorte</h1>
                <p>HR (Human Resource)</p>
            </div>
        </div>

    </div>
  )
}

export default NavProfileHR