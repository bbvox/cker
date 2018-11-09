import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./components/Header";

import Home from "./components/Home";
import Meal from "./components/Meal";
import Page from "./components/Page";
import Footer from "./components/Footer";

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <>
              <Header />
              <hr size={"1"} />
              <Route exact path="/" component={Home} />
              <Route exact path="/meals/:type" component={Meal} />
              <Route exact path="/meals/:type/:id" component={Page} />
              <Footer />
            </>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
