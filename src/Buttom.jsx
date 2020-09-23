import React from 'react'
import './Buttom.css'
import Image2 from './Image2'
const style={
fontWeight:'bold',
fontSize:'15px'
};

function Buttom(){
   
  return (
  
  <div className="Bottom">
<div className="left">
        <ul className="buttoml">
        <li class="n1 first"
           style={style} >
             <p>NEWSLETTER SIGN </p>
        </li>

        <li class="n2">
          <input type="text" placeholder="Enter your email" />
        </li>

        {/* <div class="button"> */}
        <li>
        <button class="subscribe" type="submit">Subscribe</button></li>
       {/* </div> */}
       
      </ul>
      </div>

      <div className="right">
      <ul className="buttomr">
        <li class="m1 first"
           style={style} >
             <p>CONNECT US </p>
        </li>

        <li class="m2 last">
          <Image2 />
        </li>
    </ul>

      </div>
      </div>
   
  )
  }
export default Buttom