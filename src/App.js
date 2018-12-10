import React, { Component } from 'react';
import Search from "./components/search_bar"
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';
import './App.css';
import './fonts/font.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">

          </header>
 
          <AnimatedRoute
            className="app-body"
            exact path={"/"} component={Search}
            atEnter={{ scale: 2, opacity: 0 }}
            atLeave={{ scale: 2, opacity: 0 }}
            atActive={{ scale: 1, opacity: 1 }}
            mapStyles={(styles) => ({
              transform: `scale(${styles.scale})`,
              opacity: styles.opacity
            })}
          />
          
        </div>
      </Router>
    );
  }
}

export default App;
