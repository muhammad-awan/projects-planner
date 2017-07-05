import React, { Component } from 'react';
import './App.css';

class App extends Component {
state = {
  projects: null
}

  render() {
    const { projects } = this.state

    return (
      <div className="App">
      {
       !!projects ? (
          projects.length
       ) : (
          'loading projects...'
       )
      }
      </div>
    );
  }

  componentDidMount() {
    fetch('/projects')
      .then(res => res.json())
      .then(json => {
        this.setState({
          projects: json
        })
      })
  }
}

export default App;
