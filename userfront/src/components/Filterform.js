
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios, { all } from 'axios';

function Filterform({history}) {
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);

    useEffect(() => {
        axios('/transaction/')
        .then(response => {
        console.log(response.data)
        setAllData(response.data);
        setFilteredData(response.data);
        })
        .catch(error => {
        console.log('Error getting fake data: ' + error);
        })
        }, []);
    
    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
        return data.category.search(value) != -1;
        });
        setFilteredData(result);
        }
        const handledateSearch = (event) => {
            let value = event.target.value;
            let result = [];
            console.log('date :: ',value);
            result = allData.filter((data) => {
            return data.date == value;
            });
            setFilteredData(result);
            }

   /* 

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

	

	const handleSubmit=(e)=>{

		alert('A form was submitted with Category :"' + inputs.category+
		'" ,Date :"'+inputs.date + '"');
        axios.post('/transaction/filter', JSON.stringify({inputs}), {'headers': {
            'Accept':'application/json',
            'Content-Type': 'application/json'
            
        }})
        .then(res=>(
          console.log(res.data)
        ))

        fetch(`/transaction/filter`, {
            method: "POST",
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(
                {
                  inputs
                }
              )
        })
        console.log('category ', inputs['category'])
        console.log('date ',inputs['date'])
	}
	

	*/
return (
	<div className="App">
        <header className="App-header">
            <form >
                <h3> Filter form </h3>
                <label>Enter category:
                <input 
                    type="text" 
                    name="category" 
                    
                    onChange={(event) =>handleSearch(event)}
                />
                </label>
                <label>Enter date:
                <input 
                    type="number" 
                    name="date" 
                    
                    onChange={(event) =>handledateSearch(event)}
                />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </header>
        <div style={{padding:10}}>
            {filteredData.map((value,index)=>{
            return(
            <div key={value.id}>
            <div >
            <p>ID : {value.id}</p>
            <p>Date : {value.date}</p>
            <p>Category : {value.category}</p>
            <p>Amount : {value.amount}</p>
            </div>
            </div>
            )
            })}
        </div>
	</div>
);
}

export default Filterform;
