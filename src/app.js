import React from 'react'
import ReactDOM from 'react-dom'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/free-solid-svg-icons'
import '@fortawesome/react-fontawesome'
import 'bulma'
import './style.scss'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './home'
import Thanks from './thanks'

class App extends React.Component {


  render(){

    return (
      <HashRouter>
        <Switch>
          <Route path="/thanks" component={Thanks} />
          <Route path="/" component={Home} />
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
