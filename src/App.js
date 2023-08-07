import logo from './logo.svg';
import './App.css';
import React from 'react';
//import React,{Component} from 'react'
import { CardList} from './Components/Card-List/Card-List.Component';
import {SearchBox} from './Components/search-box/serch-box.component';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      string:'parsa',
      monsters: [],
      searchField:''
    }
  }
  handleChange=(element)=>{
    this.setState({searchField:element.target.value},()=>console.log(this))
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=>response.json()).then(users=>(this.setState({string:this.state.string,monsters:users})))
  }
  
  render() {
    const{monsters, searchField}=this.state
    const filteredMonsters=monsters.filter(item=> item.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="search mnsters" handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}>
        {
          /*  this.state.monsters.map(monster => {
            <h1 key={monster.id}>{monster.name}</h1>
          })//;(monster => <h1 key={monster.id}>{monster.name}</h1>)
          this.state.monsters.map(monster=><h1 key={monster.id}>{monster.name}</h1>)*/ 
        
         }
         </CardList>
      </div>
    );
  }
}
export default App;





/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/





/*
class App extends Component{
  constructor(){
    super()
    this.state={
      string:'parsa'
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p >
              {this.state.string}
          </p>
          <button onClick={()=>{
            if(this.state.string==='parsa')
              this.setState({string:'Nasrin joonam'})
            else if(this.state.string==='Nasrin joonam')
              this.setState({string:'parsa'})
            }}>button</button>
        </header>
      </div>
    );
  }
}
export default App;

*/


