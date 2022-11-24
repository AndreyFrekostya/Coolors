import React, { useState, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark, faLock, faCircleInfo, faPalette,faHeart, faArrowsLeftRight, faCopy, faLockOpen} from '@fortawesome/free-solid-svg-icons'
const Setting = (props) => {
    const [isLocked, setLocked]=useState(props.color.isBlocked)
    const [isCanRemove, setCanRemove]= useState(true)
    const removeColor=()=>{
      let newColorAr=props.colors.filter((color)=>(props.hex!==color.hex))
      props.setColor(newColorAr)
    }
    const lockFunc=()=>{
      setLocked(!isLocked)
      props.colors.map((col)=>{
        if(col.hex===props.hex){
          col.isBlocked=!col.isBlocked
        }
      })
    }
    useEffect(() => {
      
    }, [isLocked])
    
    useEffect(() => {
      if(props.colors.length<3){
        setCanRemove(false)
      }
    }, [props.colors])
    
  return (
    <div className='settings'>
        {isCanRemove ? (
          <FontAwesomeIcon  className='icon_hover' icon={faXmark} onClick={removeColor} />
        ) : (
          null
        )}
        <FontAwesomeIcon className='icon_hover' icon={faCircleInfo} />
        <FontAwesomeIcon className='icon_hover' icon={faPalette} />
        <FontAwesomeIcon className='icon_hover' icon={faHeart} />
        <FontAwesomeIcon className='icon_hover' icon={faArrowsLeftRight}/>
        <FontAwesomeIcon className='icon_hover' icon={faCopy} />
        {isLocked ? (
            <FontAwesomeIcon style={{opacity: 1}} className='icon_hover' icon={faLock} onClick={lockFunc}/>
        )
         : (
            <FontAwesomeIcon className='icon_hover' icon={faLockOpen} onClick={lockFunc}/>
         ) }
    </div>
  )
}

export default Setting