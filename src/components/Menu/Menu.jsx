import {React, useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, 
    faArrowRightLong, 
    faArrowLeftLong, 
    faCircleInfo,
    faGlasses,
    faSun,
    faEye, 
    faShareNodes,
    faHeart, faCameraRetro
} from '@fortawesome/free-solid-svg-icons'
const Menu = () => {
    const [isActiveMenu, setIsActiveMenu]= useState(true)
  return (
    <div className='Menu'>
        <div className='advert'>
            <h2>Нажмите пробел, чтобы создать цветовые палитры</h2>
            <FontAwesomeIcon  icon={faEllipsis} />
        </div>
        <div className='menicons'>
            <FontAwesomeIcon className='icon_hover' icon={faCameraRetro}/>
            <FontAwesomeIcon  className='icon_hover' icon={faEye} />
        </div>
        <div className='menicons'>
            <FontAwesomeIcon className='icon_hover' icon={faArrowLeftLong}/>
            <FontAwesomeIcon  className='icon_hover'icon={faArrowRightLong}/>
        </div>
        <div className='menicons'>
            <div className='icon_with_h'>
                <FontAwesomeIcon icon={faCircleInfo} />
                <h2>Вид</h2>
            </div>     
            <div className='icon_with_h'>
                <FontAwesomeIcon icon={faGlasses} />
                <h2>Экспорт</h2>
            </div>
            <div className='icon_with_h'>
                <FontAwesomeIcon icon={faSun} />
                <h2>Сохранить</h2>
            </div>
        </div>
        <div className='menicons'>
            <FontAwesomeIcon className='icon_hover' icon={faEye} />
            <FontAwesomeIcon className='icon_hover' icon={faShareNodes} />
            <FontAwesomeIcon className='icon_hover' icon={faHeart} />
        </div>
        <div className='menicons'>
            <div className={isActiveMenu? 'menuToggle' : 'menuToggle active'} onClick={()=>{setIsActiveMenu(!isActiveMenu)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default Menu