import React, { Component } from 'react';
import './App.css';
import ProjectList from './components/ProjectList'

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
        <ProjectList items={ projects }/>
       ) : (
          'loading projects...'
       )
      }
      </div>
    );
  }

  componentDidMount() {
    fetch('/api/projects')
      .then(res => res.json())
      .then(json => {
        this.setState({
          projects: json
        })
      })
  }
}

export default App;
