import React from 'react'
import './Navbar.css'
const style={
fontWeight:'bold',
fontSize:'20px'
};
function Navbar(){
   
  return (
  //   <h1 className='header-div'>{props.text}</h1>
  // )
  
  <div className="header">

        
        <ul className="navbar">
        <li class="n1 first"
           style={style} >
             <p>ICrowdTask</p>
        </li>

        <li class="n2">
          <p>How it works</p>
        </li>
        <li class="n3">
        <p>Requesters</p>
        </li>
        <li class="n4">
        <p>Workers</p>
        </li>
        <li class="n5">
        <p>Pricing</p>
        </li>
        <li class="n6">
        <p>About</p>
        </li>

        <div class="button">
        <li class="n7 last">
        <button class="signin" type="submit">Sign in</button></li>
       </div>
      </ul>
    <br></br>
    </div>
   
  )
  }
export default Navbar