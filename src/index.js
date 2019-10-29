import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))

// setTimeout is ansync

// new Promise((resolve, reject) => {
//   return reject(new Error('No bears'))
//   setTimeout(() => {
//     resolve('Bears, Beets, Battlestar Galactica')
//   }, 2000)
// })
//   .then((quote) => {
//     console.log(quote)
//   })
//   .catch((error) => console.log('error', error))

// if calling with the fetch method, the way to handle the completion of a promise is by chaining a .then handler. Takes a callback fn itself. This callback will fire once the resolve has completed.
// reject method if call fails, important to have return keyword to escape out of the rest of the code. Handle errors using .catch handler
