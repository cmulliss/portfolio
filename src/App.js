import React, { Component } from 'react'
import Projects from './Projects'

class App extends Component {
    state = {
        displayBio: false  
    }

// give setState an object, setState triggers the render method
// toggleDisplayBio() {
//     this.setState({displayBio: !this.state.displayBio})
// }

  render () {
        return (
            <div>
            <h1>Hello</h1>
        <p>My name is Cherry. I am a web developer.</p>
        <p>I enjoy working on interesting projects.</p>
        {this.state.displayBio ? (
            <div>
                <p>I live in Somerset, UK. I code nearly everyday.</p>
                <p>My favourite language is JavaScript, and I think React.js is amazing.</p>
                <p>I love spending time with friends and walking in the countryside. I am also an avid reader!</p>
                <button onClick={() => this.setState({displayBio: !this.state.displayBio})}>Show less</button>
              </div>
              ) : (
                  <div>
                  <button onClick={() => this.setState({displayBio: !this.state.displayBio})}>Read more</button>
                  </div>
              )
            }
            <hr/>
            <Projects/>
    </div>
    )
  }
}
export default App

// <button onClick={this.toggleDisplayBio}>Show less</button>
