import { useState } from 'react'
import {PersonForm, Persons, Filter} from './components/Components'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const found = persons.find((person) => person.name === newName)

    if (found) {
      alert(`${newName} is already added to phonebook`)
     } else {
      const personObject = { name: newName, number: newNumber || '(no number provided)' }
      setPersons(persons.concat(personObject))
     }
     setNewName('')
     setNewNumber('')
      
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
  setNewFilter(event.target.value)
  }

  const personsToShow = newFilter.trim() === ''
    ? persons
    : persons.filter(person =>
      person.name.toLowerCase().includes(newFilter.toLowerCase())
    )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
      filter={newFilter}
      handleFilterChange={handleFilterChange}/>
      <h3>Add a new</h3>
      <PersonForm
      addPerson={addPerson}
      newName={newName}
      handlePersonChange={handlePersonChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
      persons={personsToShow}/>
    </div>
  )

}

export default App
