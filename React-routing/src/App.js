import React, { Component } from "react"
import Menu from "./navigationrouting/menu"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./navigationrouting/home"
import About from "./navigationrouting/about"
import Contact from "./navigationrouting/Contact"
import "./headstyle.css"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main-head">

          <h1><i> Hello React </i> </h1>


          <Menu />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>

        </div>
      </BrowserRouter >

    )
  }
}


export default App;
