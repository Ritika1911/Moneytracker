import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as AddIcon } from '../assets/add.svg'
const AddButton = ({user}) => {
  return (
    <div>
        <Link to={{pathname:'/tran/create',
                  state:{
                    cuser: {user},
                  },
                }}
         className='floating-button'>
            <AddIcon/>
        </Link>
      
    </div>
  )
}

export default AddButton
