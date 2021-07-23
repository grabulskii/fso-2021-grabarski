import React, {useState} from "react"

const Anectode = ({anectode, points}) => (
  <>
  {anectode} <br></br>
  has {points} votes <br></br>
  </>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  const [mostPointsIdx, setMostPoints] = useState(0)

  const vote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    
    if (newPoints[selected] > newPoints[mostPointsIdx]) {
      setMostPoints(selected)
    }

    setPoints(newPoints)
  }

  return (
    <div>
      <h1>Anectode of the day</h1>

      <Anectode anectode={anecdotes[selected]} points={points[selected]} />

      <button onClick={() => setSelected(Math.floor(Math.random() * anecdotes.length))}>
        next anecdote
      </button>

      <button onClick={vote}>
        vote
      </button>

      <h1>Anectode with most votes</h1>

      <Anectode anectode={anecdotes[mostPointsIdx]} points={points[mostPointsIdx]} />

    </div>
  )
}

export default App;
