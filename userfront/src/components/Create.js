import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const Create = () => {
    let [inputs, setInputs] = useState({});
    let [payees,setpayees] =useState({});
    let [allData,setAllData] =useState({});
    const [split, setsplit] = useState(false);
    let [tid, settid] = useState({});

    const history = useHistory()
    const location =useLocation()
    const { cuser } = location.state

    const routeChange = () =>{ 
      let path = `/user/payee`; 
      console.log("hanging route")
      history.push({pathname : path,
        state:{cuser: {cuser},},});
      
    }
    
 const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleidchange = (event) =>{
    console.log("tid ",event.target.value)
    settid(event.target.value)
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    alert(inputs);
    console.log('date',inputs['date'])
    console.log('sending cat',inputs['category'])
    fetch(`/transaction/create`, {
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
    console.log('date',inputs['date'])
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
      <label>Enter Transaction id:
      <input 
        type="number" 
        name="id" 
        value={inputs.id || ""} 
        onChange={handleidchange}
      />
      </label>
      </div>
      <div className="input-container">
      <label>Enter date:
      <input 
        type="number" 
        name="date" 
        value={inputs.date || ""} 
        onChange={handleChange}
      />
      </label>
      </div>
      <div className="input-container">
      <label>Enter category:
        <input 
          type="text" 
          name="category" 
          value={inputs.category|| ""} 
          onChange={handleChange}
        />
        </label>
        </div>
        <div className="input-container">
        <label>Enter amount:
      <input 
        type="number" 
        name="amount" 
        value={inputs.amount || ""} 
        onChange={handleChange}
      />
      </label>
      </div>
      <div>
      <button type="button" onClick={handleSubmit}  className="button-container-left" >Add details</button>
      </div>
      <div>
      <Link to={{pathname:'/user/payee',
                  state:{
                    euser: {tid},
                  },
                }}
         >
            <button type="button"  className="button-container-right">Who owes you money?</button>
        </Link> 
        </div>
    </form>
      
    </div>
  )
}

export default Create
