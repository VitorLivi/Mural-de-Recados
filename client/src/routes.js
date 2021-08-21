import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/login'
import Messages from './pages/messages'

const Routes = () => {
  return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={(props) => <Login {...props}/>}/>
                <Route exact path='/Messages' component={(props) => <Messages {...props}/>}/>
            </Switch>
        </BrowserRouter>
  )
}

export default Routes
