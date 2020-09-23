import React from 'react'
import './Buttom.css'
function Image2(){
    return(
       <div className="icon"> 
       
<img src={require('./imgs/img3.jpg')} alt="3" width={36} height={38} />
<img src={require('./imgs/img4.jpg')} alt="4" width={36} height={38} />
<img src={require('./imgs/img5.jpg')} alt="5" width={36} height={38} />
</div>
    )
}


export default Image2