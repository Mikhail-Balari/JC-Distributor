import './assets/CheckoutForm.css'
import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleConfirm = (event) => {
    event.preventDefault()

    const userData = { name, phone, email }

    onConfirm(userData)
  }

  return (
    <div className="card-form checkout-form">
      <div className="card-body-form">
        <form className="Form" onSubmit={handleConfirm}>
          <div className="mb-3">
            <label htmlFor="name" className="Label">Nombre</label>
            <input id="name" placeholder="Su nombre" className="form-control" type="text" value={name} onChange={({ target }) => setName(target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="Label">Teléfono</label>
            <input id="phone" placeholder="Su teléfono" className="form-control" type="text" value={phone} onChange={({ target }) => setPhone(target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="Label">Email</label>
            <input id="email" placeholder="su-email@email.com" className="form-control" type="email" value={email} onChange={({ target }) => setEmail(target.value)} />
          </div>
          <div className="">
            <button type="submit" className="btn btn-primary btn-order">Crear Orden</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutForm
