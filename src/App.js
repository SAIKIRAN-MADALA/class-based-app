import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { CardList } from './Components/card-list/card-list.component';

class App extends React.Component {
 constructor(){
   super();
   this.state={
     monsters:[
     ]
   };
 }
 //Life Cycle Methods
componentDidMount(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=> response.json())
  .then(users=> this.setState({monsters:users}));
}
  render(){
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
} 

export default App;