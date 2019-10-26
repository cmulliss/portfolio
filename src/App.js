import React, { Component } from 'react';
import Projects from './components/Projects';
import SocialProfiles from './components/SocialProfiles';
import profile from './assets/christmasphoto.jpg';
import Title from './components/Title';

class App extends Component {
  state = {
    displayBio: false,
  };


  // give setState an object, setState triggers the render method
  toggleDisplayBio = ()  => {
      this.setState({displayBio: !this.state.displayBio})
  }

  render() {
    return (
      <div>
        <img src={profile} alt="profile" className="profilePic" />
        <h1>Hello!</h1>

        <p>My name is Cherry.</p>
        {this.state.displayBio ? <Title/> : null } 
        <p>I enjoy working on interesting projects.</p>
        {this.state.displayBio ? (
          <div>
            <p>I live in Somerset, UK. I code nearly everyday.</p>
            <p>
              My favourite language is JavaScript, and I think
              React.js is amazing.
            </p>
            <p>
              I love spending time with friends and walking in the
              countryside. I really like penguins and I am an avid
              reader!
            </p>
            <button onClick={this.toggleDisplayBio}>Show less</button>
          </div>
        ) : (
          <div>
          <button onClick={this.toggleDisplayBio}>
              Read more
            </button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}
export default App;

// <button onClick={this.toggleDisplayBio}>Show less</button>

// <button
//               onClick={() =>
//                 this.setState({ displayBio: !this.state.displayBio })
//               }
//             >
//               Show less
//             </button>
//           </div>
//         ) : (
//           <div>
//             <button
//               onClick={() =>
//                 this.setState({ displayBio: !this.state.displayBio })
//               }
//             >
//               Read more
//             </button>