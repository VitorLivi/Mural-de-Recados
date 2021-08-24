import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Redirect, Route } from 'react-router'
import Loading from '../Pages/Loading'

function privateRoute ({ component: Component, ...rest }) {
  const [authorized, setAuthorized] = useState({ authorized: false, loading: true })

  useEffect(() => {
    axios.post('http://localhost:5000/auth/validate', null, {
      headers: { Authorization: 'Bearer ' + window.localStorage.getItem('recadosToken') }
    }).then(res => {
      setAuthorized({ authorized: res, loading: false })
    }).finally(() => {
      setAuthorized(prev => ({ authorized: prev.authorized, loading: false }))
    })
  }, [])

  if (authorized.loading) {
    return <Loading />
  }

  if (authorized.authorized) {
    return <Route {...rest} component={(props) => <Component {...props}/>} />
  }

  return <Redirect path='/'/>
}

export default privateRoute
