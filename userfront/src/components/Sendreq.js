import React from 'react'
import { useParams } from 'react-router-dom';
const Sendreq = ({myuser}) => {

    let handleSearch = (event) => {
      console.log(myuser)
      let value = event.target.value;
      console.log(myuser)
      fetch(`/user/send/${myuser}/`, {
          method: "PUT",
          headers: {
              'Content-Type': 'application/json'
          },
          
          body: JSON.stringify({'inputs':
          {'user':myuser}})
      })
  }


  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Hello {myuser}</h1>
            <form >
                <h3> Connect with friends </h3>
                <label>Enter username:
                <input 
                    type="text" 
                    name="username" 
                    
                    
                />
                </label>
                <input type="submit" onSubmit={(event) =>handleSearch(event)} value="Submit"/>
            </form>
          </header>
    </div>
    </div>
  )
}

export default Sendreq
