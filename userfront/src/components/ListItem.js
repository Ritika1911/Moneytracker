import React from 'react'
import {Link} from 'react-router-dom'

const ListItem = ({note}) => {
  return (
    <div className='notes-list-item'>
    <Link to={`/li/${note.id}`}>

      <h1>Category {note.category}</h1>
      <h1>Date : {note.date}</h1>
      
    </Link>
    </div>
  )
}

export default ListItem
