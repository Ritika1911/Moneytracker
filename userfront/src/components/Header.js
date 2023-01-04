import React from 'react'
import money from '../assets/money.png'
const Header = () => {
  return (
    <div>
    <div className='app-header'>
      <img src={money} className='money-icon'/><h1>Money tracker</h1>
      
    </div>
    
    </div>
  )
}

export default Header;
