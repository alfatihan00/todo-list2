import React from 'react'
import './SubMenu.css'

const SubMenu = ({location, on}) => {
  const {left, top} = location
  return (
    <div style={{left:`${left}px`, top:`${top}px`}} className={`subMenu ${!on && `hide`}`}>awokawokk</div>
  )
}

export default SubMenu