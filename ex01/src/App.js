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
    
    render (){
      
      return (
        <div className="App">
          <button type="button"
          onClick={ () => this.setMyStorage()}>Submit</button>
          
        </div>
      )
    }
        
  }
 export default App;
    