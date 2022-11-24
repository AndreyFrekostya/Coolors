import React, { useState, useEffect} from 'react'
import Setting from './Setting'
import AddColor from '../ui/AddColor'
const Color = (props) => {
  let hex='#'+props.hex
    let width=window.innerWidth/props.colors.length
  return (
    <div style={{background : hex, width: width}} className='color'>
      <div>
        <Setting colors={props.colors} hex={props.hex} setColor={props.setColor} color={props.color}/>
        <div className='information_about_color'>
          Hex:<br/>
          {props.hex}
        </div>
      </div>
    </div>
  )
}

export default Color