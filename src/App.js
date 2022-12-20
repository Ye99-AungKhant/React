import React from 'react'

class Items extends React.Component{
  render() {
    return (
       <li>
        {this.props.name}, ${this.props.price}
       </li>
    );
  }
}

class App extends React.Component {
 state = {
  items:[
    
  ]
 }

 add = () => {
  let id = this.state.items.length
  if(id === 0){
    id +=1
  }else{
    id = this.state.items.length + 1
  }

  this.setState({
    items:[
      ...this.state.items,
      {id, name:`Fruid ${id}`, price:0.1 * id}
    ]
  })
 }

  render() {
    return (
       <div>
        <h1>Hello React</h1>
        <button onClick={this.add}>ADD</button>
        <ul>
          {this.state.items.map(i => {
            return(
              <Items name={i.name} price={i.price}></Items>
            )
          })}
        </ul>
       </div>
    );
  }
}

export default App