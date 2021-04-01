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

      const myCookieData=localStorage.getItem('2021','Year');
      const myLocalStorageDate=localStorage.getItem("yes, but Arena first","Paragon");
      const mySessionStorageDate=localStorage.getItem("React","fronted");
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
  