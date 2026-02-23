import { useState, useEffect } from 'react'
import {PersonForm, Persons, Filter} from './components/Components'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
      console.log('promise fullfilled')
      setPersons(initialPersons)
    })
  }

  useEffect(hook,[])
  console.log('render', persons.length, 'persons')

  const addPerson = (event) => {
    event.preventDefault()
    const found = persons.find((person) => person.name === newName)

    if (found) {
      updatePerson(found.id, { ...found, number: newNumber })
     } else {
      const personObject = { 
        name: newName, 
        number: newNumber || '(no number provided)',
        id: String(persons.length + 1)
      }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
     }
      
  }

  const deletePerson = (id) => {
    const person = persons.find(n => n.id === id)
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter(n => n.id !== id))
        })
        .catch(error => {
          alert(
            `The person '${person.name}' was already deleted from server`
          )
          setPersons(persons.filter(n => n.id !== id))
        })
    }
  }

  const updatePerson = (id, newObject) => {
    if (window.confirm(`${newObject.name} is already added to the phonebook, replace the old number with a new one?`)) {
    personService
      .update(id, newObject)
      .then(returnedPerson => {
        setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
        setNewName('')
        setNewNumber('')
      })
      .catch(error => {
        alert(
          `Information of '${newObject.name}' has already been removed from server`
        )
        setPersons(persons.filter(n => n.id !== id))
      })
  }
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
      updatePerson={updatePerson}
      />
      <h2>Numbers</h2>
      <Persons
      persons={personsToShow}
      deletePerson={deletePerson}/>
    </div>
  )

}

export default App
