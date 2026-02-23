const PersonForm = ({addPerson, newName, handlePersonChange, newNumber, handleNumberChange, deletePerson}) => {
    return (
        <form onSubmit={addPerson}>
        <div> name: <input 
            value={newName}
            onChange={handlePersonChange}
          />
        </div>
        <div> number: <input 
            value={newNumber}
            onChange={handleNumberChange}
            placeholder="optional"
        />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

const Persons = ({persons, deletePerson}) => {
    return (
        <ul>
        {persons.map(person => (
          <li key={person.id}> {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button></li>
        ))}
      </ul>
    )
}

const Filter = ({filter, handleFilterChange}) => {
    return (
        <div>
            filter shown with 
            <input
            value={filter}
            onChange={handleFilterChange}
            placeholder="find names"
            />
        </div>
    )
}

export {PersonForm, Persons, Filter}