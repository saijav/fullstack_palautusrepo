import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState(new Array(anecdotes.length).fill(0))

  const generateRandomInt = () => {
    const random = Math.floor(Math.random()*7) + 1
    console.log(random)
    setSelected(random)
  }

  const vote = () => {
    const updatedVotes = [...voted]
    updatedVotes[selected] += 1
    setVoted(updatedVotes)
  }

  const mostVotedIndex = voted.indexOf(Math.max(...voted))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {voted[selected]} votes </p>
      <div>      
        <button onClick={generateRandomInt}>
          next anecdote
        </button>
        <button onClick={vote}>
          vote
          </button>
          <h2>Anecdote with most votes</h2>
          {voted[mostVotedIndex] > 0 ? (
        <>
          <p>{anecdotes[mostVotedIndex]}</p>
          <p>has {voted[mostVotedIndex]} votes </p>
        </>
      ) : (
        <p>No votes yet.</p>
      )}
        </div>
    </div>
  )
}

export default App