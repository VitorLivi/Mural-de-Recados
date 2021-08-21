import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './Pages/login'
import Messages from './Pages/messages'

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
