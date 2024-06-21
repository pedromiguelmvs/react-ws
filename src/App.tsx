import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="chat-wrapper">
        <div className="chat">
          {/* <input type="text" className="input-type" placeholder="Digite algo..." /> */}
          <textarea className="input-type" placeholder="Digite algo..." />
        </div>
        
      </div>
    </>
  )
}

export default App
