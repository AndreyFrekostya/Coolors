import React from 'react'
import Color from './Color'
import AddColor from '../ui/AddColor'
const Colors = (props) => {
  return (
    <div className='result_color'>
      {props.colors.map((color)=>
        <div className='for_add'>
          <Color key={color.index} hex={color.hex} colors={props.colors} setColor={props.setColor} color={color}/>
          <AddColor colors={props.colors} setColor={props.setColor} index={color.index}/>
        </div>
        
      )}
    </div>
    
  )
}

export default Colors