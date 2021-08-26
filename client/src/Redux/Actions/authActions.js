import axios from 'axios'

export async function loginAction (userName, password, history, dispatch) {
  try {
    const { data } = await axios.post('http://localhost:5000/auth', { username: userName, password: password })

    window.localStorage.setItem('recadosToken', data.token)

    dispatch({
      type: 'LOGIN',
      user: data.user,
      loading: false
    })

    history.push('/Messages')
  } catch (error) {
    alert(error?.response?.data?.error)

    dispatch({
      type: 'LOGIN',
      user: undefined,
      loading: false
    })
  }
}

export async function validateAction (dispatch) {
  try {
    dispatch({ type: 'START_REQUEST', loading: true })

    const { data } = await axios.post('http://localhost:5000/auth/validate', null, { headers: { Authorization: 'Bearer ' + window.localStorage.getItem('recadosToken') } })

    return {
      type: 'VALIDATE',
      user: data.user,
      loading: false
    }
  } catch (error) {
    console.error(error)
  }
}

export function logoutAction () {
  window.localStorage.removeItem('recadosToken')

  return {
    type: 'LOGOUT',
    user: null
  }
}
