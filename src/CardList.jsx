import React from 'react'

import Card from './Card'
import './Card.css'
import staffList from './staffList'

// function cardComponent (staff , i){
//   return <Card 
//   key = {staff.key}
//   avatar = {staff.avatar}
//   name = {staff.name}
//   position = {staff.position}
// />
// }
function CardList(){
   
  return <div className="row">
 <ul>
      <li>
     {staffList.slice(0,2).map((staff,i)=>
      <Card    
        key={staff.key}
        avatar={staff.avatar}
        name={staff.name}
        position={staff.position}
        />
        )}</li>
</ul>
<ul>
      <li>
   {staffList.slice(2,4).map((staff,i)=>
      <Card    
        key={staff.key}
        avatar={staff.avatar}
        name={staff.name}
        position={staff.position}
        />
        )}
     </li>
     </ul>
     <ul>
      <li>
   {staffList.slice(4,6).map((staff,i)=>
      <Card    
        key={staff.key}
        avatar={staff.avatar}
        name={staff.name}
        position={staff.position}
        />
        )}
     </li>
     </ul>
  </div>
  
}
export default CardList