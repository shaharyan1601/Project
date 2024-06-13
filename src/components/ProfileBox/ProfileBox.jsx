import React from 'react'
import profile from './image/Picture1.png';
import './profileBox.css';
function ProfileBox({name,email,position,desc}) {
  return (
    <div className='profileBox'>
        <img className='profileDP' src={profile} alt="" />
        <p className="name">Preeti Jadav</p>
        <p className="position">GS Analyst</p>
        <p className="email">preeti.jadav@axzoragroup.com</p>
        <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis magnam perferendis
             nulla, eius nam perspiciatis dicta, enim modi in consequuntur fugiat esse quidem officia
              officiis temporibus asperiores hic

        </p>
    </div>
  )
}

export default ProfileBox