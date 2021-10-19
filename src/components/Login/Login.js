import { useState, useContext } from 'react'
import UserContext from '../../context/UserContext'
import login from '../Login/login.css'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [surname, setSurname] = useState('')
    const { login } = useContext(UserContext)
    const history = useHistory()

    const handleLogin = (event) => {
        event.preventDefault()

        const objUser = {
            username,
            surname
        }

        login(objUser)
        console.log('success', `Bienvenido ${objUser.username}`)
        history.push('/')
    }

    return (
        <div className='LoginContainer'>
          <h3>Bienvenido a nuestro Formulario de Ingreso</h3>
          <form onSubmit={handleLogin} className='LoginForm'>
          <div className="form-group">
                <label className='formGroupExampleInput'>
                    Nombre
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Ingrese su nombre'
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                  />
                </label>

                <label className='formGroupExampleInput2'>
                    Apellido
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Ingrese su apellido'
                    value={surname}
                    onChange={({ target }) => setSurname(target.value)}
                  />
                </label>
                <button type='submit' className='Button'>Login</button>
            </div>
          </form>
        </div>
      )
}

export default Login