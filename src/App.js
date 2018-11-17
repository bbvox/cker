import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import { createStore, applyMiddleware, compose  } from "redux";

import { rootUrl } from "./services/config";

import Header from "./components/Header";

import Home from "./components/Home";
import Multi from "./components/Multi";
import Single from "./components/Single";
import Footer from "./components/Footer";

import store from "./store";

const Slider = (props) => {
  const sliderStyle = {
    // position: 'relative',
    textAlign: 'center',
    background: '#f5f5f5',
    marginBottom: '1rem'
  }
  return (
    <div style={sliderStyle}>
      <img src={`${rootUrl}/images/slider4.jpg`} alt=' ' />
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singlePage: false
    }
    this.onSinglePage = this.onSinglePage.bind(this);
  }

  onSinglePage(singlePage) {
    this.setState({
      singlePage
    });
    //scroll page to TOP
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Router>
            <>
              <Header />
              {!this.state.singlePage && Slider()}
              <Route exact path="/" component={Home} />
              <Route exact path="/meals/:type" component={Multi} />
              <Route exact path="/meals/:type/:pageId" render={(props) => <Single onSingle={this.onSinglePage} {...props} />} />
              <Footer />
            </>
          </Router>
        </div>
      </Provider>
    );
  }
}

// <Route exact path="/meals/:type/:id" component={Single} />
export default App;