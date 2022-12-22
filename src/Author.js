import React from "react";

class Author extends React.Component {
    render() {
      return (
         <div>
          {this.props.children}
         </div>
      );
    }
  }

  export default Author