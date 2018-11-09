import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { mealMenu } from "../services/config";

class Header extends Component {
  constructor(props) {
    console.log("Props:::", props);
    super(props);
    this.state = {
      menu: mealMenu
    };
  }

  componentWillMount() {
    console.log(this.props);
  }

  //fix this
  handleHover(menuId) {
    let { menu } = this.state;
    // if (menu[menuId].hover) {
    //   menu[menuId].hover = false;
    //   menu[menuId].href = menu[menuId].href.slice(0, -1);
    // } else {
    //   menu[menuId].hover = true;
    //   menu[menuId].href += 2;
    // }
    // this.setState({ menu });
  }

  renderMenu() {
    const { menu } = this.state;

    console.log(menu);
    return (
      <ul>
        {menu.map((v, k) => (
          <li key={k}>
            <NavLink
              onMouseOver={() => this.handleHover(k)}
              onMouseOut={() => this.handleHover(k)}
              className={`ico-${v.href}`}
              activeClassName="active"
              to={`/meals/${v.href}`}
            >
              {v.title}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    /* <img src="./include/icos/cake2.svg" /> */
    return (
      <header>
        <nav>{this.renderMenu()}</nav>
      </header>
    );
  }
}

export default Header;
