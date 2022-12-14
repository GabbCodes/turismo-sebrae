import React, {useState} from 'react';
import './Navbar.css';
import {RiMenuLine, RiCloseLin } from 'react-icons/ri';


function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [toogleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = () => {
      active == 'nav__menu'
       ? setActive('nav__menu nav__active')
      : setActive("nav__menu");

    };
    
  return (
    <nav className='nav'>
      <a href='#' className='nav__brand'>Sebrae</a>
      <ul className={active}>
        <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Teste2</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Teste3</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Teste4</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Teste5</a></li>
      </ul>
      <div onClick={navToggle} className={toogleIcon}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </nav>
  );
}

export default Navbar;