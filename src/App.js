import React, { createRef } from 'react'
import User from './User'

const App = (props) => {

  let nameRef = createRef()
  let ageRef = createRef()

  let [users, setUsers] = React.useState([
    {id:1, name:"Ko Ye", age:23}
  ])

  let plus = () => {
    let id = users.length + 1
    let name = nameRef.current.value
    let age = ageRef.current.value
    
    setUsers([
      ...users,
      {id, name, age}
    ])
  }

  return (
    <div>
      <input type="text" ref={nameRef}/>
      <input type="number" ref={ageRef}/>
      <button onClick={plus}>Plus</button>
      <ul>
        {users.map(u => <User key={u.id} name={u.name} age={u.age}/>)}
      </ul>
    </div>
  )
}

export default App