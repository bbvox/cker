import React from "react";
import { Link } from "react-router-dom";

import { meals } from "../services/config";

class Meal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: meals
    };
  }

  renderCells() {
    const { type } = this.props.match.params;
    return (
      <article className="grid">
        {this.state.meals.map((v, k) => (
          <div key={k} className={"item" + (k === 0 ? " main" : "")}>
            <Link to={`/meals/${type}/${k}`}>
              <img src={`../images/${v.img}`} />
            </Link>
            <span>{v.title}</span>
          </div>
        ))}
      </article>
    );
  }

  render() {
    return (
      <main>
        <h2> Ядене : {this.props.match.params.type} </h2>

        {this.renderCells()}
      </main>
    );
  }
}

export default Meal;
