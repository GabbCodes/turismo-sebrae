/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Header.css';
import capa2 from "../../assets/img/capa2.png"
import logo from "../../assets/img/logo.png"
import botaoparaiba from "../../assets/img/botaoparaiba.png"
import usinalogo from "../../assets/img/usinadados.png"

const Header = () => {
  return (


    <div className='container'>
     <h1 className='titulo'> TURISMO </h1>
     <img className='simboloparaiba' src={botaoparaiba} />
     <img className='simbolousina' src={usinalogo} />
    </div>
    
  )
}

export default Header