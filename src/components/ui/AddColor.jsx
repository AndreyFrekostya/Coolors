import React, { useState,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import funcHex from '../../func and hooks/funcHex';
const AddColor = (props) => {
    const [hoverad,setHoverad]=useState(false)
    const [sign, setSign]=useState(true)
    const addColor=()=>{
      let newColors=funcHex(true, 1)
      let newColObj= newColors[0]
      newColObj.index=props.index-1
      props.setColor([...props.colors, newColObj])
    }
    useEffect(() => {
      props.setColor(props.colors.sort((prev, next) => prev.index - next.index))
      if(props.colors.length>1 && props.colors.length<10){
        setSign(true)
      }else{
        setSign(false)
      }
      console.log('change')
    }, [props.colors.length])
    
  return (
    <>
      {sign ? 
        (
          <div className='add' onMouseOver={()=>setHoverad(true)} onMouseOut={()=>setHoverad(false)}>
            <div className={hoverad ? 'faplus_back' : 'faplus_back_hide'}>
                <FontAwesomeIcon  className='icon_add' icon={faPlus} onClick={addColor}  />
            </div>    
          </div>
        )
        :
        (
          null
        )}
    </>
  )
}

export default AddColor