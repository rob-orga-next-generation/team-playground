import './App.css'
import PersonA from './components/PersonA'
import PersonB from './components/PersonB'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Geile Team App</h2>
        <PersonA />
        <PersonB />
      </header>
    </div>
  )
}

export default App
