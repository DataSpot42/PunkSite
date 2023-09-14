import React from 'react';
import './popup.css';

const Popup = (productinfo,somethingelse) => {
const product = [productinfo]
console.log(productinfo)
return(productinfo.trigger)? (

    <div className='popup-container'>
    <div className='inner-popup'>
        <h1>hello{productinfo.description}</h1>
       
    <button className='btn-close' onClick={() => productinfo.setTrigger(false)}>close</button>
    {/* {productinfo.children} */}
</div>

    </div>
):"";


 }

 export default Popup