import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Loading from '../Pages/Loading'

import Login from '../Pages/Login'
import Messages from '../Pages/Messages'
import PrivateRoute from './privateRoute'

const Routes = () => {
  return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/Loading' component={(props) => <Loading {...props}/>}/>
                <Route exact path='/' component={(props) => <Login {...props}/>}/>
                <PrivateRoute exact path='/Messages' component={(props) => <Messages {...props}/>}/>
            </Switch>
        </BrowserRouter>
  )
}

export default Routes
