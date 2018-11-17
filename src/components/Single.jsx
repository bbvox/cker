import React from "react";
import { rootUrl, singleMenu } from "../services/config";

import { getData } from "../services/single";

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // connected with parent component 
  // turn on / off Slider on Single page
  componentWillMount() {
    const { pageId } = this.props.match.params;

    this.props.onSingle(true);
    
    getData(pageId).then(resData => {
      console.log("comp:::", resData)
    })
  }

  componentWillUnmount() {
    this.props.onSingle(false);
  }

  renderMenu() {
    return (
      <ul className="sub_menu">
        {singleMenu.map((val, ind) => (
          <li key={ind}><a href={val.href}>{val.title}</a></li>
        ))}
      </ul>
    )
  }

  renderInfo() {
    return (
      <React.Fragment>
        <h3 className="notice">Начин на приготвяне</h3>
        <span className="ico">
          <i className="fas fa-clock ">&nbsp;45 мин.</i>
          <i className="fas fa-utensils">&nbsp;10 порции</i>
        </span>
      </React.Fragment>
    );
  }

  renderProducts () {
    return (
      <React.Fragment>
        <ul>
          <li>Картофи - 200 гр.</li>
          <li>Пилешко филе - 200 гр.</li>
          <li>Зехтин - 2 супени лъжици</li>
          <li>Сол - 1/2 суп. лъжица</li>
          <li></li>
          <li></li>
        </ul>
      </React.Fragment>
    );
  }

  render() {
    return (
      <main className={'app_width app_white'}>
      <h2> Ядене : {this.props.match.params.type} </h2>
      <article className="grid single">
        <div className="item imenu">
          {/* <h3> Помощ </h3> */}
          {this.renderMenu()}
        </div>
        <div className="item iimg">
          <h3>Пица Сицилиана</h3>
          <img src={`${rootUrl}/images/pizza.jpg`} alt=' ' />
        </div>
        <div className="item iads"></div>
        <div className="item iinfo">
          {this.renderInfo()}
        </div>
        <div className="item iprod">
          <h3 className="notice">Продукти</h3>
          <div className="box_shadow"> list here<br /></div>

        </div>
      </article>
    </main>
    );
  }
}

export default Single;