import React, { useState, useEffect } from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
function About({history}) {
    console.log("payee page")
    const location =useLocation()
    const { euser } = location.state
    console.log("payee user ",euser)
    const [allData,setAllData] = useState([]);

    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        var updatedList = [...checked];
        console.log( "checked : " ,event.target.value)
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };

    const handlesplit = (event) => {
        console.log("type ",(euser.tid))
        fetch(`/transaction/addpayee/${euser.tid}`, {
            method: "POST",
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(
              {
                'inputs':checked
              } 
            )
        })
        history.push('/')
     
    };

    useEffect(() => {
        
        getNotes()
    }, [])

    let getNotes = async () => {
    axios('/user/list')
        .then(response => {
        console.log(response.data)
        setAllData(response.data);
        
        })
        .catch(error => {
        console.log('Error getting fake data: ' + error);
        })
    }
    return (
        <div className="notes-header">
    <div className="notes-title">Select Users who owe you money:</div>
    <div style={{padding:10}}>
            {allData.map((value,index)=>{
            return(
            <div key={value.id}>
                <div >
                <p>User : {value.username}</p>
                <p>email : {value.email}</p>
                </div>
                <input value={value.username}  onChange={handleCheck} type="checkbox" />
            </div>
            )
            })}
        </div>
        <button className="button-container" onClick={handlesplit}>Split Amount</button>
  </div>
    )
}

export default About