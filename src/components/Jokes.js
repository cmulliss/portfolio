import React, { Component } from 'react'

const Joke = ({ joke: { setup, punchline } }) => (
  <p style={{ margin: 20 }}>
    {setup} <em>{punchline}</em>
  </p>
)

class Jokes extends Component {
  state = { joke: {}, jokes: [] }

  componentDidMount() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then((json) => this.setState({ joke: json }))
      .catch((error) => alert(error.message))
  }

  fetchJokes = () => {
    fetch('https://official-joke-api.appspot.com/random_ten')
      .then((response) => response.json())
      .then((json) => this.setState({ jokes: json }))
      .catch((error) => alert(error.message))
  }

  render() {
    return (
      <div>
        <h2>Highlighted Joke</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>Want ten new jokes?</h3>
        <button onClick={this.fetchJokes}>Click me!</button>
        {this.state.jokes.map((joke) => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    )
  }
}

export default Jokes

// place fetches and other aysnchronous code in the componentDidMount hook, and the end result of that ansyc code should update teh state with this.setState call when its data has finished fetching. That way the render method can pick up the change and update the component with the new data as soon as it's available.
// fetch method returns a js promise.
// promises are ways that js can represent the results of a value that will be resolved in the future. It's a promise of some eventually returned value
// when that value is finally returned it's going to trigger an event that will allow us to get the result and we can handle that result by chaining the fetch, that returns a promise, with a .then handler.
// This .then handler takes a callback fn to fire when the event is actually available, and this parameter is a return value of the promise, which in the case of a fetch is a response object.

// .then(json => ) handles result of promise and allows us to fire another callback fn which has a json parameter

// (response) => console.log('response:', response)

// {
//     "id": last joke id + 1,
//     "type": "programming",
//     "setup": "What's the best thing about a Boolean?",
//     "punchline": "Even if you're wrong, you're only off by a bit."
//   }
