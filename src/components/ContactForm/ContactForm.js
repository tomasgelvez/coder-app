import { useState } from 'react'
import './ContactForm.css'


const ContactForm = ({ toggleVisibility, setContact }) => {
    const [telefono, setTelefono] = useState('')
    const [correo, setCorreo] = useState('')
    const [cdgoPostal, setCdgoPostal] = useState('')
    const [direccion, setDireccion] = useState('')
    const handleContactForm = (e) => {
        e.preventDefault()
        toggleVisibility.current.toggleVisibility()

        const objContact = {
            telefono,
            correo,
            direccion,
            cdgoPostal
        }
        setContact(objContact)
        setTelefono('')
        setCorreo('')
        setDireccion('')
        setCdgoPostal('')
    }

    return (
        <div className='ContactContainer'>
          <div>Informacion del comprador</div>
          <form className='ContactForm' onSubmit={handleContactForm}>
                <div className="form-group">
                  <label className="formGroupExampleInput">Telefono 
                  <input
                      className='InputContact'
                      placeholder='Inserta tu numero telefonico'
                      type='text'
                      value={telefono}
                      onChange={({ target }) => setTelefono(target.value)}
                  />
                  </label>
                </div>
                <div className="form-group">
                  <label className="formGroupExampleInput2">Correo electronico
                  <input
                className='InputContact'
                placeholder='Inserta tu correo electronico'
                type='text'
                value={correo}
                onChange={({ target }) => setCorreo(target.value)}
                   />

                   </label>
                </div>
                <div className="form-group">
                  <label className="formGroupExampleInput2">Direccion
                <input
                className='InputContact'
                placeholder='Inserta tu direccion'
                type='text'
                value={direccion}
                onChange={({ target }) => setDireccion(target.value)}
                   />

                   </label>
                </div>
                <div className="form-group">
                  <label className="formGroupExampleInput2">Codigo postal
                  <input
                className='InputContact'
                placeholder='Inserta tu codigo postal'
                type='text'
                value={cdgoPostal}
                onChange={({ target }) => setCdgoPostal(target.value)}
                    />
                   </label>
                   <button className='btn btn-dark' type='submit'>Confirmar datos</button>

                </div>
        </form>
          
        </div>
      )
}

export default ContactForm