import logo from './logo.svg';
import './App.css';
import React  from 'react';

class App extends React.Component {
 constructor(){
   super();
   this.state={
     monsters:[
       {
         name: "Frankestein",
          id:"asc1"
        
        },
       {
         name:"Dracula",
          id:"asc2"
        },
       {
         name:"Zombie",
         id:"asc3"
       }
     ]
   };
 }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map(
         monster=> <h1 key={monster.id}> {monster.name}</h1> 
         )}
      </div>
    );

  }
} 


export default App;
