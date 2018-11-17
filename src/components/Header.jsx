import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { mealMenu, mealUrl } from "../services/config";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: mealMenu
    };
    this.menuId = 0;
  }

  componentWillMount() {
    this.initMenu(this.props.location.pathname);
  }

  // newtProps - argument
  componentWillReceiveProps({ location }) {
    if (location.pathname !== this.props.location.pathname) {
      this.initMenu(location.pathname);
    }
  }

  // set active
  initMenu(pathName) {
    const _href = pathName.slice(mealUrl.length);
    const _hrefIndex = this.state.menu.findIndex(v => v.href === _href);

    this.setActive(_hrefIndex);
  }

  //set menu[activeIndex].active = true;
  setActive(activeIndex) {
    let menu = this.state.menu.map((v, ind) => {
      v.active = ind === activeIndex;
      return v;
    });

    this.setState({ menu });
  }

  handleHover(menuId) {
    let { menu } = this.state;
    if (menu[menuId].className) {
      menu[menuId].className = false;
    } else {
      menu[menuId].className = `ico ico-${menu[menuId].href}2`;
    }
    this.setState({ menu });
  }

  renderMenu() {
    const { menu } = this.state;

    return (
      <ul>
        {menu.map((v, k) => (
          <li key={k}>
            <NavLink
              onMouseOver={() => this.handleHover(k)}
              onMouseOut={() => this.handleHover(k)}
              activeClassName={`active ico-${v.href}2`}
              className={v.className ? v.className : `ico ico-${v.href}`}
              to={`${mealUrl}${v.href}`}
            >
              {v.title}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <>
      <div className={'head_top app_white app_width'}></div>
      <header>
        <nav className={'head_middle app_width'}>{this.renderMenu()}</nav>
      </header>
      </>
    );
  }
}

// export default Header;
export default withRouter(Header);
