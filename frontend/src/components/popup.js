import React from 'react';
import './popup.css';

const Popup = (props) => {

return(props.trigger)? (

    <div className='popup-container'>
    <div className='inner-popup'>
    <button className='btn-close' onClick={() => props.setTrigger(false)}>close</button>
    {props.children}
</div>

    </div>
):"";


 }

 export default Popup