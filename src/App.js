import React from 'react'

class Item extends React.Component {
  render() {
    return (
       <div>
        <li>
          {this.props.name}, ${this.props.price}
        </li>
       </div>
    );
  }
}

class AddForm extends React.Component {
  nameRef = React.createRef()
  priceRef = React.createRef()

add = () => {
  let name = this.nameRef.current.value
  let price = this.priceRef.current.value
  this.props.add(name, price)
}

  render() {
    return (
       <div>
        <input type="text" ref={this.nameRef}/>
        <input type="text" ref={this.priceRef}/>
        <button onClick={this.add}>ADD</button>
       </div>
    );
  }
}

class Title extends React.Component {
  render() {
    return (
       <div>
        <h1>{this.props.title}</h1>
       </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
       <div>
        <Title title={this.props.name}/>
       </div>
    );
  }
}

class App extends React.Component {

  state = {
    items:[
      {id:1, name:"Apple", price:1}
    ]
  }

  add = (name, price) => {
    let id = this.state.items.length +1

    this.setState({
      items:[
        ...this.state.items,
        {id, name, price}
      ]
    })
  }

  render() {
    return (
       <div>
        <Header name="My App"/>
        <AddForm add={this.add}/>
        <ul>
          {this.state.items.map(i => {
            return(
              <Item 
                key={i.id}
                name={i.name}
                price={i.price}
              />
            )
          })}
        </ul>
       </div>
    );
  }
}

export default App