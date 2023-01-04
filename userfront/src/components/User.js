import React from 'react'

const User = ({match}) => {
    let username  = match.params.username
    
    let [us, setNote] = useState(null)
    
    useEffect(() => {
        getNote()
    }, [username])


    let getNote = async () => {
        if (username === 'new') return
        let response = await fetch(`/transaction/${noteid}/`)
        let data = await response.json()
        setNote(data)
    }
  return (
    <div>
      
    </div>
  )
}

export default User
