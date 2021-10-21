import { useState, useContext } from 'react'
import UserContext from '../../context/UserContext'
import '../Login/login.css'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState('')
    const [surname, setSurname] = useState('')
    const [mail, setMail] = useState('')
    const { login } = useContext(UserContext)
    const history = useHistory()

    const handleLogin = (event) => {
        event.preventDefault()

        const objUser = {
            username,
            surname,
            mail
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
                <label className="formGroupExampleInput3">
                  Email
                <input
                  className="form-control"
                  placeholder='Ingresa tu correo electronico'
                  type='text'
                  value={mail}
                  onChange={({ target }) => setMail(target.value)}
                />
                </label>
                <button type='submit' className='btn btn-dark'>Ingresar datos</button>
               
            </div>
          </form>
        </div>
      )
}

export default Login