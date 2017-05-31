import React from 'react';

class App extends React.Component {
   render() {
      return (
        <h1>{this.props.title}</h1>
      );
   }
}

  Header.defaultProps = {
    title: "Lightspeed Demo",
    headerProp: "Header from props...",
    contentProp:"Content from props..."
  }
}

export default Header;
