import { useState } from 'react'
import './ContactForm.css'


const ContactForm = ({ toggleVisibility, setContact }) => {
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [comentario, setComentario] = useState('')

    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            telefono,
            correo,
            comentario
        }
        setContact(objContact)
        setTelefono('')
        setCorreo('')
        setComentario('')
    }

    return (
        <div className='ContactContainer'>
          <div>Informacion del comprador</div>
          <form className='ContactForm' onSubmit={handleContactForm}>
                <div class="form-group">
                  <label for="formGroupExampleInput">Telefono 
                  <input
                      className='InputContact'
                      placeholder='Inserta tu numero telefonico'
                      type='text'
                      value={telefono}
                      onChange={({ target }) => setTelefono(target.value)}
                  />
                  </label>
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Correo electronico
                  <input
                className='InputContact'
                placeholder='Inserta tu correo electronico'
                type='text'
                value={correo}
                onChange={({ target }) => setCorreo(target.value)}
                   />

                   </label>
                </div>
                <div class="form-group">
                  <label for="formGroupExampleInput2">Comentarios
                  <input
                className='InputContact'
                placeholder='Inserta tus comentarios extras'
                type='text'
                value={comentario}
                onChange={({ target }) => setComentario(target.value)}
                    />
                   </label>
                   <button className='Button' type='submit'>Confirmar</button>

                </div>
        </form>
          
        </div>
      )
}

export default ContactForm