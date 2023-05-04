import './App.css'
import { api } from './api'

function invoke() {
  console.log(api.get('posts'));
}

function App() {
  return (
    <>
      <div className="axios">
        <button onClick={() => invoke()}>invoke</button>
      </div >
    </>
  )
}

export default App
