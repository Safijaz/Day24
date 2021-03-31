import React, {Component} from 'react';

  class App extends React.Component {
    constructor(props){
      super(props)
   
          
       }
     setMyStorage=()=>{
      
     document.cookie="Year=2021";
      localStorage.setItem("Paragon", "yes, but Arena first");
      sessionStorage.setItem("frontend", "React");
    }
    getMyStorage=()=>{

      const myCookieData=localStorage.getItem('value','key');
      
    }
    
    render (){
      
      return (
        <div className="App">
          <button type="button"
          onClick={ () => this.setMyStorage()}>Submit</button>
          <button type="button"
          onClick={ () => this.getMyStorage()}>Get</button>
        </div>
      )
    }
        
  }
 export default App;
  