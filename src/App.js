import React,{Component} from 'react';
import './App.css';
import Logo from './components/Logo/Logo.js';
import Particles from 'react-particles-js';
import {particleOptions} from './particleOptions.js'

  
        

class App extends Component{
  render(){
return (
  
  

    <div className="App">
     <Particles className='particles' params={particleOptions}/>
     
     <Logo/>
    
     
    
    </div>
  );
}
}

export default App;
