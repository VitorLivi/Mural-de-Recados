import axios from 'axios'

export async function loginAction (userName, password, history) {
  try {
    const { data } = await axios.post('http://localhost:5000/auth', { username: userName, password: password })

    window.localStorage.setItem('recadosToken', data.token)
    history.push('/Messages')

    return {
      type: 'LOGIN',
      user: data.user,
      loading: false
    }
  } catch (error) {
    alert(error?.response?.data?.error)
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
