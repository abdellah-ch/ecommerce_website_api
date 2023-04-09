import React from 'react'

// import {GlobaleState} from '../../GlobaleState'

import Menu from './icons/bars-solid.svg'

import close from './icons/xmark-solid.svg'

import Cart from './icons/cart-shopping-solid.svg'

import logo from './icons/logo.png'

import {Link} from 'react-router-dom'

function Header() {

  // const value = useContext(GlobaleState)

  return (

    <header>

      <div className='menu'>

        <img src={Menu} alt="" width="30"/>

      </div>

      <div className='logo'>

        <h1>

          <Link to="/"><img src= {logo} alt='' width="70"/></Link>

        </h1>
      
      </div>
      
      <ul>
        <li><Link to="/">Home</Link></li>

        <li><Link to="/Products">Products</Link></li>

        <li><Link to="/Login">Login/Sign up</Link></li>
        
        <li>

          <img className='menu' alt='' src={close} width="30"/>

        </li>

      </ul>

      <div className='cart-icon'>

        <span>0</span>

        <Link to="/Cart">

        <img src={Cart} alt='' width="30"/>
        
        </Link>

      </div>

    </header>
    
  )
}

export default Header