import React, { Component } from 'react';
import classes from './App.css';
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
    let btnClass = '';
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

      btnClass = classes.Red;
    }

    const dynClasses = [];
    if (this.state.persons.length <= 2) {
      dynClasses.push(classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      dynClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={dynClasses.join(' ')}>This is working</p>
        <button 
          onClick={this.togglePersonsHandler}
          className={btnClass}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div',  {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
