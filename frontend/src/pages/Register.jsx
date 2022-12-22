import {useState} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

  const onChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser/> Register
        </h1>
        <p>Please create an account</p>
      </section>
      <section className="form">
        <form>
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id='name' 
              name = 'name'
              value={name} 
              onChange={onChange} 
              placeholder='Enter you name' 
            />
          </div>
        </form>
      </section>
    </>
  )
}

export default Register