import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { mealMenu } from "../services/config";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: mealMenu
    };
  }

  renderMenu() {
    const { menu } = this.state;
    return (
      <ul>
        {menu.map((v, k) => (
          <li key={k}>
            <NavLink activeClassName="active" to={`/meals/${v.href}`}>
              {v.title}
            </NavLink>
          </li>
        ))}
      </ul>
    );
    /*
    return (
      <ul>
        {menu.map(k => (
          <li>
            <Link to={menu[k]}>{k} -</Link>
          </li>
        ))}
      </ul>
    );
    */
  }

  render() {
    return (
      <header>
        <nav>{this.renderMenu()}</nav>
      </header>
    );
  }
}

export default Header;
