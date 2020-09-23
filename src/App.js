import React from 'react'
import Header from'./Navbar'
import Image from './Image'
import './App.css'
//import Greeting  from './Greeting'
//import Login  from './Login'
import CardList from './CardList'
import Buttom from './Buttom'
//const isLoggedin=true
const style={
  fontWeight:'bold',
  fontSize:'30px',
  textAlign:'center'
  };

function App()
{
    return (
      
      <div>
      <Header />
      <Image />
      <p style={style}>Featured Requesters</p>
     <CardList />
     <Buttom />
      </div>
    );

    
}
export default App