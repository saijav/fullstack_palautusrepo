const PersonForm = ({addPerson, newName, handlePersonChange, newNumber, handleNumberChange}) => {
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

const Persons = ({persons}) => {
    return (
        <ul>
        {persons.map((person, index) => (
          <li key={index}> {person.name} {person.number}</li>
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