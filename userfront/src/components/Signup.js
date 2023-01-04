
import React, {useState, useEffect} from 'react'

const Signup = ({history}) => {
    let [inputs, setInputs] = useState({});

 const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {

   

    alert(inputs);
   
    fetch(`/user/register/`, {
        method: "POST",
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json'
            
        },
        body: JSON.stringify(
          {
            'inputs':inputs
          }
        )
    })
    
    history.push('/')
  }
  let createNote = async () => {
    fetch(`/transaction/create`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs),
    })
}

  return (
    <div className="form">
      <form>
      <div className="input-container">
      <label>Username
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      </div>
      <div className="input-container">
      <label>Enter Email id:
      <input 
        type="text" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </label>
      </div>
      <div className="input-container">
      <label>Enter Budget:
        <input 
          type="number" 
          name="budget" 
          value={inputs.budget|| ""} 
          onChange={handleChange}
        />
        </label>
        </div>
        <div className="input-container">
        <label>Enter amount spent:
      <input 
        type="number" 
        name="amount_spent" 
        value={inputs.amount_spent || ""} 
        onChange={handleChange}
      />
      </label>
      </div>
      <div className="input-container">
      <label>Enter password:
      <input 
        type="password" 
        name="password" 
        value={inputs.password || ""} 
        onChange={handleChange}
      />
      </label>
      </div>
        <button type="button" className="button-container" onClick={handleSubmit} >Submit</button>
    </form>
      
    </div>
  )
}

export default Signup
