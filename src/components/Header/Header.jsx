import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark} from '@fortawesome/free-solid-svg-icons'
import { faApple, faGoogle} from '@fortawesome/free-brands-svg-icons'
const Header = () => {
  const [isActivePop, setActivePop]=useState(false)
  
  return (
    <div className='header'>
        {isActivePop ? (
          <>
            <div className='popblur'>
            </div>
            <div className='showpopup'>
              <FontAwesomeIcon icon={faXmark} className='cross' onClick={()=>(setActivePop(false))}/>
              <div className='obvertka'>
                <h2>Привет!</h2>
                <p>Используйте свою электронную почту или другую службу, чтобы продолжить работу с Coolors</p>
                <div className='variant_div --firstvariant_div'>
                  <FontAwesomeIcon className='google' icon={faGoogle} />
                  <p className='variant'>Продолжить работу с Google</p>
                </div>
                <div className='variant_div'>
                  <FontAwesomeIcon className='apple' icon={faApple} />
                  <p className='variant'>Продолжить работу с Apple</p>
                </div>
                <button className='go_with_email'>Продолжить работу с электронной почтой</button>
                <p className='accept'>
                  Продолжая, вы соглашаетесь с намиши<br/> Условиями предоставления услуг.<br/> Ознакомьтесь с нашей политокой конфиденциальности.
                </p>
              </div>
            </div>
          </>
        ) : (
          null
        )}
        
        <div className='ico'>Coolors</div>
        <div className='header_area2'>
            <div className='area1'>
                <a>Инструменты</a>
                <a>Вакансии</a>
                <a>Go Pro</a>
            </div>
            <div className='area2'>
                <a>Вход</a>
                <button className='sign up' onClick={()=>(setActivePop(true))}>Регистрация</button>
            </div>
        </div>
    </div>
  )
}

export default Header
