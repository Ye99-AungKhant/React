import React, { createRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import User from './User'
import About from './About'
import axios from "axios"

const App = props => {

  const [product, setProduct] = useState([])

  useEffect(() => {
    getProduct()
    // axios.get("https://dummyjson.com/products").then((res) => setProduct(res.data.products))
  },[])

  async function getProduct(){
    const res = await axios.get("https://dummyjson.com/products").then((res) => setProduct(res.data.products))
  }

  let nameRef = createRef()
  let ageRef = createRef()

  let [users,setUsers] = React.useState([
    {id:1, name:"Ko Ye", age:23}
  ])

  let add = ( )=> {
    let name = nameRef.current.value
    let age = ageRef.current.value
    let id = users.length +1
    setUsers([
      ...users,
      {id, name, age}
    ])
  }

  return(
    <div>
      
      <Link to='/about' relative={<About/>}>About</Link>
      <input type="text" ref={nameRef}/>
      <input type="text" ref={ageRef}/>
      <button onClick={add}>Add</button>
      <ul>
        {users.map( u => <User key={u.id} name={u.name} age={u.age}/>)}
      </ul>
      {product.map((p) => {
        return <p key={p.id}>{p.title}</p>
      })}
    </div>
  )
}

export default App