import React from 'react'

import Routes from './Routes/routes'

import { Provider } from 'react-redux'
import Store from './Redux/Store'

const App = () => <Provider store={Store}><Routes /></Provider>

export default App
