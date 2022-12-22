import React from 'react'

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
          <input type="number" ref={this.priceRef}/>
          <button onClick={this.add}>ADD</button>
         </div>
      );
    }
  }

  export default AddForm