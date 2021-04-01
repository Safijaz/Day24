import React, {Component} from 'react';

class App extends React.Component{

 setLocalStorage=()=>{

  localStorage.setItem("Arena", "Selection Month");
 }

 getLocalStorage=()=>{
   const myLocalStorage=localStorage.getItem("Arena");
 }

  render (){

  return (

    <div className="App">
    <button type="button"
          onClick={ () => this.setLocalStorage()}>Set Local Storage</button>
      <button type="button"
          onClick={ () => this.getLocalStorage()}>Get Local Storage</button>
    </div>
  )

}
}

export default App;
