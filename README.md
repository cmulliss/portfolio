# Building from scratch

## fonts:

<fonts.google.com>

- npm i parcel-bundler react react-dom --save

- parcel has hot reloading capability

- /Users/cherry/repos/ReactBootcamp/portfolio/src/App.js:8:10: Support for the experimental syntax 'classProperties' isn't currently enabled (8:11):

- npm i @babel/plugin-proposal-class-properties --save

- live-server for build, as don't need re-loading

- npm i live-server --save

- can load up contents of dist folder

- will always want to build the project before you use live-server to serve it up

- npm run build && live-server dist

## document

- document is the html
- React's virtual DOM very lightweight compared to DOM
- compared DOM and virtual DOM, held within React's engine, and only makes the minimum changes needed to update the DOM to match

### Lifecycle methods

- lifecycle methods are based on the component's relationship with the document
- componentDidMount, fires when component is inserted into the DOM
- componentWillUnmount, fires when component is about to leave the DOM
-
