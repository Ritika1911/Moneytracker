import React from 'react'
import {Link} from 'react-router-dom'
import login from '../assets/login.png'
import signup from '../assets/signup.png'
const Home = () => {
  return (
    // <div className="notes">
    //     <div >
    //       <h1>Login</h1>
    //     <Link to='/user/login'  >
    //     <img src={login} />
    //     </Link>
    //     </div>
    //     <div  className="notes-list">
    //     <Link to='/user/signup' className='floating-button'>
    //     <img src={signup }/>
    //     </Link>
    //     </div>
        

      
    

    <div>
      <h2>One stop to track, organize, filter and split transactions.</h2>
        <div className="row">
        <div className="column">
        <Link to='/user/login'  >
        <h1>Log In</h1>
          <img src={login}  />
          </Link>
        </div>
        <div className="column">
        <Link to='/user/signup'>
          <h1>Create Account</h1>
          <img src={signup} className='homeimg' />
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Home
