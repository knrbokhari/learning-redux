import { useState } from 'react'
import './App.css'
import CounterView from './features/counter/CounterView'

function App() {
  const count = useState(0)

  return (
    <div className="App">
      <CounterView />
    </div>
  )
}

export default App
