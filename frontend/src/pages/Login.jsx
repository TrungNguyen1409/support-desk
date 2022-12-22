import {useState} from 'react'
import {toast} from 'react-toastify'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import {login} from '../features/auth/authSlice'


function Login() {

  const [formData, setFormData] = useState({
  
    email: '',
    password: '',
    
  })
  
  const dispatch = useDispatch()

  const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name]: e.target.value,
      
    }))
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    const userData = {
      
      email,
      password
    }

    dispatch(login(userData))
    
  }

  const {user, isLoading, isSuccess, message} = useSelector(
    state => state.auth
  )

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt/> Log-In
        </h1>
        <p>Please Log-in to get support</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          
          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              id='email' 
              name = 'email'
              value={email} 
              onChange={onChange} 
              placeholder='Enter you Email' 
              required
            />
          </div>
          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id='password' 
              name = 'password'
              value={password} 
              onChange={onChange} 
              placeholder='Enter you Password' 
              required
            />
          </div>
          
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login