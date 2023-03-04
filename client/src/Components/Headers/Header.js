import React,{useState,useContext} from 'react'

import {GlobaleState} from '../../GlobaleState'

import Menu from './icons/bars-solid.svg'

import close from './icons/xmark-solid.svg'

import Cart from './icons/cart-shopping-solid.svg'

import {Link} from 'react-router-dom'

function Header() {

  const value = useContext(GlobaleState)

  return (

    <header>

      <div className='menu'>

        <img src={Menu} alt="" width="30"/>

      </div>

      <div>

        <h1>

          <Link to="/">Shop</Link>

        </h1>

      </div>
      
      <ul>

        <li><Link to="/">Products</Link></li>

        <li><Link to="/">Login/Sign up</Link></li>
        
        <li>

          <img src={close} width="30"/>

        </li>

      </ul>

      <div className='cart-icon'>

        <span>0</span>

        <Link>

        <img src={Cart} width="30"/>
        
        </Link>

      </div>

    </header>
    
  )
}

export default Header