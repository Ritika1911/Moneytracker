import React, { useState, useEffect } from 'react'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
const Transactionpage = ({match, history}) => {
    
    let noteid  = match.params.id
    
    let [note, setState] = useState(null)
    
    useEffect(() => {
        getNote()
    }, [noteid])


    let getNote = async () => {
        if (noteid === 'new') return
        let response = await fetch(`/transaction/${noteid}/`)
        let data = await response.json()
        setState(data)
    }

    let createNote = async () => {
        fetch(`/transaction/create`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let updateNote = async () => {
        fetch(`/transaction/${noteid}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }
    let handleSubmit = () => {
        if (noteid !== 'new' && note.amount == 0) {
            deletehandler()
        } else if (noteid !== 'new') {
            updateNote()
        }
        else if (noteid === 'new' && note !== null) {
            createNote()
        }
        history.push('/')
    }
    let handleChange = (value) => {
        setState(note => ({ ...note, 'amount': value }))
        console.log('Handle Change:', note)
    }
    
    let handleChangecat = (value) =>{
        setState(note => ({ ...note, 'category': value }))
        console.log('Handle Change:', note)
    }

    let deletehandler = async () => {
        fetch(`/transaction/${noteid}/delete`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        history.push('/')
    }

    let createhandler = async (value)=>{
        setState(note => ({ ...note, value }))
        createNote()
        history.push('/')
    }
    return(
    
        <div className='note'>
            <div>
                <div className='note-header'>
                    <h3>
                        <ArrowLeft onClick={handleSubmit} />
                        {noteid !== 'new' ? (
                        <button onClick={deletehandler}>Delete</button>
                        ) : (
                        <button onClick={ (e) => { createhandler(e.target.value) }}>Done</button>
                        )}
                    </h3>
                </div>
                
                <div>
                    <h3>Transaction Details</h3> 
                    <div className="notes-list">
                    <h4> ID      :    {note?.id}</h4>

                    <h4> Date     :  {note?.date} </h4>

                    <h4> Category {note?.category}</h4>

                    <p>People who owe money</p>
                    <h4> {note?.payees}</h4>
                    <p>Amount</p><textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.amount}></textarea>
                    
                    </div>
                </div>
                <div>
                
                </div>
            </div>
        </div>
    )
}

export default Transactionpage
