import { useState, useContext } from 'react'
import UserContext from '../../context/UserContext'

import { useHistory } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useContext(UserContext)
    const history = useHistory()

    const handleLogin = (event) => {
        event.preventDefault()

        const objUser = {
            username,
            password
        }

        login(objUser)
        console.log('success', `Bienvenido ${objUser.username}`)
        history.push('/')
    }

    return (
        <div className='LoginContainer'>
          <h3>Bienvenido a nuestro Formulario de Ingreso</h3>
          <form onSubmit={handleLogin} className='LoginForm'>
            <label className='LabelLogin'>
                Nombre
              <input
                className='InputLogin'
                type='text'
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
            </label>
            <label className='LabelLogin'>
                Apellido
              <input
                className='InputLogin'
                type='text'
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </label>
            <button type='submit' className='Button'>Login</button>
          </form>
        </div>
      )
}

export default Login