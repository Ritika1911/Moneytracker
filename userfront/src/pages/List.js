import React, {useState, useEffect} from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'
import Filterbutton from '../components/Filterbutton'
const List = ({user}) => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        
        getNotes()
    }, [])


    let getNotes = async () => {

        let response = await fetch('/transaction/')
        let data = await response.json()
        setNotes(data)
    }

  return (
    <div className="notes">
            <h1>Hello {user}</h1>
            
            <div className="notes-header">
                
                <h3 className="notes-title">&#9782; Transactions</h3>
                <p className="notes-count"> Active transactions({notes.length})</p>
                <Filterbutton className='floating-button-filter' />

            </div>

            <div className="notes-list">
                {notes.map((note,index) => (
                <div>
                    <h3>Transaction id:  {note.id}</h3>
                    <ListItem key={index} note={note}/>
                    
                </div>
                ))}
            </div>
            
            <AddButton user={user}/>
            <div>
            
            </div>
    </div>
  )
}

export default List;
