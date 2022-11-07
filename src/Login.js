import React from 'react'
import './Login.css'
import {useState}  from 'react';
import {useNavigate ,Link, Navigate} from 'react-router-dom';
import {useStateValue} from './Stateprovider';




function Login() {
    const [{},dispatch] = useStateValue();
    const navigate = useNavigate();

    const name = "NULL";
    const [email , setEmail] = useState('')
    const [password ,setPassword] = useState('')
    


    async function LoginUser(event) {
		event.preventDefault()
        

       
		const response = await fetch('https://aqueous-forest-68132.herokuapp.com/api/login', {
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
        
       


        dispatch({
            type:'SET_USER',
            id: data.id,
            name: data.name,
            basket:data.basket
           
        })


     
        


       
  
		if (data.user) {
          navigate('/')
		}
        else{
            alert('Please check your username and password')
        }
	
  
}

        function toregister(){

            navigate('/register');


        } 


return (
    <div className='login'>
        <Link to='/'>
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <button type='submit' onClick={LoginUser} className='login__signInButton'>Sign In</button>
            </form>

            <p>
                DON'T WORRY NO CONDITIONS BE HAPPY Lemrabott :)
		⚠️⚠️⚠️ THIS IS AN AMAZON CLONE DO NOT INPUT REAL INFORMATIONS!!!!!
            </p>

            <button onClick={toregister}  className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>
)




}


export default Login ;
