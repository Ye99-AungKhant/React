import React from 'react';

class Item extends React.Component {
  render() {
    return (
       <li>
        {this.props.name}, ${this.props.price}
       </li>
    );
  }
}

class App extends React.Component {
  render() {
    return (
       <div>
        <h1>Hello React</h1>
        <Item name="Apple" price="2"/>
       </div>
    );
  }
}

export default App;