import React from 'react';
import './Menu.css';

class Menu extends React.Component {
  render() {
    var x = 10;
    return <div className="menu">
             <h1>My Menu</h1>
             <div>{x === 10 ? 'True': 'False'}</div>
           </div>

  }
}

export default Menu;