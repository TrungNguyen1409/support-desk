import {useState,useEffect} from 'react'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import {FaSignInAlt} from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux'
import {login,reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Login() {

  const [formData, setFormData] = useState({
  
    email: '',
    password: '',
    
  })
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const {user, isLoading,isError, isSuccess, message} = useSelector(
    state => state.auth
  )
  useEffect( () => {
    if(isError){
      toast.error(message)
    }
    
    // Redirect when logged in
    if(isSuccess && user){
      navigate('/')
    }

    dispatch(reset())
  },[isError,isSuccess,user,message,navigate,dispatch])


  if(isLoading){
    return <Spinner/>
  }
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