import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Lia', age: 25 },
      { name: 'Lars', age: 20 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { name: newName, age: 21 },
      { name: 'Lia', age: 25 },
      { name: 'Lars', age: 21 }
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Julie', age: 21 },
      { name: event.target.value, age: 25 },
      { name: 'Lars', age: 21 }
    ]})
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button 
          onClick={() => this.switchNameHandler("Melissa")}
          style={style}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}
         click={this.switchNameHandler.bind(this, "Mina!")}/>
        <Person name={this.state.persons[1].name}  age={this.state.persons[1].age}
         changed={this.nameChangedHandler}>My hobbies are: racing</Person>
        <Person name={this.state.persons[2].name}  age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
