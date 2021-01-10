import React from 'react';
import './App.css';
import NavBar from "../navbar/NavBar";

const items = ['home', 'about', 'projects', 'socials'];

class App extends React.Component {
  public render() {
    return (
        <div className="App">
          <NavBar items={items}/>
        </div>
    );
  }
}

export default App;
