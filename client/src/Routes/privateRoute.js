import React, { useEffect as validateToken } from 'react'

import { validateAction } from '../Redux/Actions/authActions'

import { Redirect, Route } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Loading from '../Pages/Loading'

function privateRoute ({ component: Component, ...rest }) {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  validateToken(async () => {
    dispatch(await validateAction(dispatch))
  }, [])

  if (state.loading) {
    return <Loading />
  }

  if (state.user) {
    return <Route {...rest} component={(props) => <Component {...props}/>} />
  }

  return <Redirect to='/'/>
}

export default privateRoute
