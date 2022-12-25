import React, { createRef } from 'react'
import User from './User'

const App = (props) => {

  let nameRef = createRef()
  let descRef = createRef()

  let [users, setUsers] = React.useState([
    {id:1, name:"Ko Ye", desc:"Ayan chit that"}
  ])

  let create = () => {
    let name = nameRef.current.value
    let desc = descRef.current.value
    let id = users.length +1 
    setUsers([
      ...users,
      {id, name, desc}
    ])
  }

  return (
    <div>
      <input type="text" ref={nameRef}/>
      <input type="text" ref={descRef}/>
      <button onClick={create}>Create</button>
      <ul>
        {users.map(u => <User key={u.id} name={u.name} desc={u.desc}/>)}
      </ul>
    </div>
  )
}

export default  App