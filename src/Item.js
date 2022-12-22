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

  export default Item