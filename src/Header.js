import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import {useStateValue} from "./Stateprovider";





function Header() {

  

  
 
  const [{basket,user,id},dispatch] = useStateValue();



  async function eraseSession(event){
    event.preventDefault()

    const response = await fetch('https://aqueous-forest-68132.herokuapp.com/api/savebasket', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},

			body: JSON.stringify({
        basket,
        id,
       
			}),
		})

   
  
  dispatch({
    type:'REM_USER',
    user: null,
    id:null,
    basket:[],
    


  })

  

  console.log('Session Erased')


  }

  

    


    
    const renderAuthButton = (props) => {
      if (!user) {
        return(
          <Link to ={'/login'}>
            <div className='header__option'>
            <span className='header__optionLineOne' >Hello</span>
            <span className='header__optionLineTwo'  >Sign in</span> 
            </div>
           </Link>

        )
          
        
      } 
      
      else {
        return (

         
         
          <Link to ='/' onClick={eraseSession} textDecoration='none' >
          <div className='header__option'>
          <span className='header__optionLineOne' >Hello</span>
          <span className='header__optionLineTwo'  >Log out</span> 
          </div>
         </Link>
         
        )
      }
    }





  return (
    <div className='header'>  
    <Link to ="/">
    </Link>

    <div className="header__search">
        <input
            className='header__searchInput'
            type = 'text'
	    placeholder="⚠️⚠️⚠️ THIS IS NOT THE REAL AMAZON DO NOT GIVE SENSITIVE INFORMATION !!!"
            
        />
        <SearchIcon className='header__searchIcon'/>
       
    </div>

    <div className="header__nav">

    
    
    {renderAuthButton()}


    <div className='header__option'>




    

     <span className='header__optionLineOneDisable'>Returns</span>

    <span className='header__optionLineTwoDisable'>& Orders</span> 

    </div>

    <div className='header__option'>
    
    <span className='header__optionLineOneDisable'>Your</span>

    <span className='header__optionLineTwoDisable'>Prime</span> 

    </div>
    <Link to='/checkout'>
    <div className='header__optionBasket'>
    
    <span className="header__username" >{user}</span>
   
    <ShoppingBasketIcon />  
    

    <span className = "header__optionLineTwo   header__BasketCount">{basket.length}</span>
    </div>

    </Link>

    </div>
    
    </div>
    

  )
}

export default Header
