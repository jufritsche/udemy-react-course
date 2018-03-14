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
    otherState: 'some other value',
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                name={person.name} 
                age={person.age} 
                click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button 
          onClick={this.togglePersonsHandler}
          style={style}>Switch Name</button>
        {persons}
      </div>
    );
    //return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
