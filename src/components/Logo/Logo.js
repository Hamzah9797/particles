import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';


const Logo = () => {
	return(
	<div className='ma2 mt0'>
    <Tilt className="Tilt shadow-5 br2" options={{ max : 75 }} 
    style={{ height: 150, width: 150 }} >
    <div className="Tilt-inner pa3">
    <img alt='brain' style={{paddingTop:'5px'}} src={brain}/>  
    </div>
    </Tilt>
	</div>
	);
}
export default Logo;