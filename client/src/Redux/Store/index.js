import { createStore } from 'redux'

const INITIAL_STATE = {
  user: {},
  loading: false
}

function store (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.user, loading: action.loading }
    case 'VALIDATE':
      return { user: action.user, loading: action.loading }
    case 'START_REQUEST':
      return { ...state, loading: action.loading }
    default:
      return state
  }
}

const newStore = createStore(store)

export default newStore
