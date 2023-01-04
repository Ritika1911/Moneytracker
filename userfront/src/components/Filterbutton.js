import React from 'react'
import {Link} from 'react-router-dom'
import funnel from '../assets/funnel.png'
const Filterbutton = () => {
  return (
    <div>
      <p>Filter</p>
        <Link to='/tran/filter' className='floating-button-filte'>
            <img src={funnel}/>
            
        </Link>
      
    </div>
  )
}

export default Filterbutton 
