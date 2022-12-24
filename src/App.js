import React, { createRef } from 'react'
import User from './User'

const App = (props) => {
  let nameRef = createRef()
  let ageRef = createRef()


  let [users,setUsers] = React.useState([
    {id:1, name:"Ko Ye", age:22},
    {id:2, name:"TT", age:22},
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
        {users.map( i => <User key={i.id} name={i.name} age={i.age}/>)}
      </ul>
    </div>
  )
}

export default App
// import Author from './Author'
// import Item from './Item'
// import AddForm from './AddForm';

// class Title extends React.Component {
//   render() {
//     return (
//        <div>
//         <h1>{this.props.title}</h1>
//        </div>
//     );
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//        <div>
//         <Title title={this.props.name}/>
//        </div>
//     );
//   }
// }





// class App extends React.Component {

//   state = {
//     items:[
//       {id:1, name:"Apple", price:1}
//     ]
//   }

//   add = (name, price) => {
//     let id =this.state.items.length +1
//     this.setState({
//       items:[
//         ...this.state.items,
//         {id, name, price}
//       ]
//     })
//   }

//   render() {
//     return (
//        <div>
//         <Author>
//           <h1 style={{backgroundColor:'black', color:'white'}}>Ye Aung Khant</h1>
//         </Author>
//         <Header name="My React App"/>
//         <AddForm add={this.add}/>
//         <ul>
//           {this.state.items.map(i => {
//             return(
//               <Item 
//                 key={i.id}
//                 name={i.name}
//                 price={i.price}
//               />
//             )
//           })}
//         </ul>
//        </div>
//     );
//   }
// }

// export default App

