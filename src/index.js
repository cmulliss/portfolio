import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import App from './App'
import Jokes from './components/Jokes'
import Header from './components/Header'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <Header>
            <App />
          </Header>
        )}
      />
      <Route
        path="/Jokes"
        render={() => (
          <Header>
            <Jokes />
          </Header>
        )}
      />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)

// Link and Router don't cause complete refresh

// children allows us to put <App/> or <Jokes/> within the header tags, now App becomes a child of the header component. Then react provides a way to access the inner jsx through a children key in the props object.

// now get a render property, with a callback to a pair of header tags, and within the header tags we supply jsx.
