import React from 'react';


function DarkMode(props) {
    return ( 
        <div>
    
        <span><input className='input-button' type="checkbox" onClick= {props.onDarkMode} id ="darkmode-toggle"/> 
           <label className='lablel-button' htmlFor="darkmode-toggle">
             
           </label>
           </span>
           
   </div>
     );
}

export default DarkMode;