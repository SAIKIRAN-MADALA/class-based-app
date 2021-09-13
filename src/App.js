import './App.css';
import React  from 'react';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/Search-Box/Searchbox.component'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    //Life Cycle Methods
  }
componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
      const { monsters, searchField } = this.state;
      const filtered_Monsters=monsters.filter(monster=>
          monster.name.toLowerCase().includes(searchField.toLowerCase())
        ); 
    return (
      <div className="App">
      <h1> Monsters ROLDEX</h1>
        <SearchBox 
        placeholder="Search Monsters" 
        ChangeEvent= {e => this.setState( { searchField: e.target.value } ) } 
            />
        <CardList monsters={filtered_Monsters} />
      </div>
    );
  }
} 
export default App;