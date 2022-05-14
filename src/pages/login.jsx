import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {API} from 'aws-amplify'

export const Login = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const login = async () => {
    API.post("MeribachatAPI", "/users", {
      "email": user,
      "password": password
    }).then(response => {
      console.log(response)
      navigate('/1')
    }).catch(error => {
      console.log(error);
    })
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='font-semibold text-3xl'>Login</h1>
      <input className='mt-2 border-2 rounded-lg w-1/6 px-4 py-2 border-blue-500' placeholder='Enter User Name' value={user} onChange={e => setUser(e.target.value)} type="text" />
      <input className='mt-2 border-2 rounded-lg w-1/6 px-4 py-2 border-blue-500' placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <button onClick={() => login()} className='bg-red-500 rounded-lg mt-3 px-4 py-2'>Login</button>
    </div>
  )
}
