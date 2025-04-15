import React from 'react'
import '../styling/room.scss'
import SidePanel from '../components/SidePanel'

function Room() {
  return (
    <div className='room-container'>
        <SidePanel selected="room"></SidePanel>
    </div>
  )
}

export default Room