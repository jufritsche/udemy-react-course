import React, { Component } from 'react';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person';
class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Lia', age: 25 },
      { id: 3, name: 'Lars', age: 20 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({persons: [
      { id: 1, name: newName, age: 21 },
      { id: 2, name: 'Lia', age: 25 },
      { id: 3, name: 'Lars', age: 21 }
    ]})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (index) => {
    // copy the array
    const persons = [...this.state.persons];
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
                click={() => this.deletePersonHandler(index)} 
                key={person.id} 
                changed={(event) => this.nameChangedHandler(event, person.id)} />
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
          style={style}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
