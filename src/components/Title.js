import React, { Component } from 'react';

const TITLES = [
  'a web developer',
  'a software engineer',
  'an enthusiastic learner',
  'a penguin enthusiast',
];

class Title extends Component {
    state = { titleIndex: 0 }
    
  componentDidMount() {
    console.log('Title component has mounted');

    this.animateTitles();
  }

  componentWillUnmount() {
      console.log('Title component has unmounted')
  }

    // setInterval takes 2 args, the 1st a callback fn, the second the rate at which we want it to fire.
    animateTitles = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length

            this.setState({titleIndex: titleIndex})
        }, 4000 )
    }

  render() {
    const title = TITLES[this.state.titleIndex];
    return (
        <p>I am {title}</p>
    )
  }
}

export default Title;
