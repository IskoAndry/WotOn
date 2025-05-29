import './App.css'
import { variableWotOn, ideas } from './data.ts'

function App() {
  return (
    <>
      <h1>{variableWotOn.titleApp}</h1>
      <div>
        {ideas.map((idea) => {
          return (
            <div key={idea.nick}>
              <h2>{idea.nametitle}</h2>
              <p>{idea.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
