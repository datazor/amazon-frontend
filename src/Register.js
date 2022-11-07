import React from 'react';
import {useState}  from 'react';
import { Link } from 'react-router-dom';
import "./Register.css"


function Register() {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password ,setPassword] = useState('')
   


    async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('https://aqueous-forest-68132.herokuapp.com/api/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				password,
    
			}),
		})

		const data = await response.json()
   
		if (data.user) {
            window.location.href="/login"
		}else{

      
    }
	}

       
  return (
    <div className='register'>
    <Link to ="/">
     
    </Link>
      <div className='register__container'>
      <h2>Sign Up</h2>
      <form>
                <h5>Name</h5>
                <input type='text' value={name} onChange={e => setName(e.target.value)} />
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type='submit' onClick={registerUser} className='register__signUpButton'>Create Account</button>
      </form>



		 <p>
		⚠️⚠️⚠️ THIS IS A FAKE AMAZON CLONE DO NOT INPUT REAL INFORMATIONS!!!!!
                </p>

       </div>
       </div>
  )
}



export default Register;
