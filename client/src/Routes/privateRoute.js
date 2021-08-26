import React, { useEffect as validateToken, useState } from 'react'

import { validateAction } from '../Redux/Actions/authActions'

import { Redirect, Route } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Loading from '../Pages/Loading'

function privateRoute ({ component: Component, ...rest }) {
  const dispatch = useDispatch()

  const state = useSelector(state => state)
  const [loading, setLoading] = useState(true)

  validateToken(async () => {
    await validateAction(dispatch)
    setLoading(false)
  }, [])

  if (loading) {
    return <Loading />
  }

  return <Route {...rest} component={(props) => (state?.user?.username ? <Component {...props}/> : <Redirect to='/'/>)} />
}

export default privateRoute
