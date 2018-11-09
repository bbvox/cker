import React from "react";

class Page extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <h2> Ядене : {this.props.match.params.type} </h2>
        <article className="grid single">
          <div className="item ileft">box 1 - Menu</div>
          <div className="item iimg">box 2 - Image</div>
          <div className="item">box 3 - Products</div>
          <div className="item">box 4</div>
          <div className="item">box 5</div>
          <div className="item">box 6</div>
        </article>
      </main>
    );
  }
}

export default Page;
