import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hello } from './Hello.jsx';
import { Card } from './Card/Card.jsx'; 
import { Hooks } from './Hooks/Hooks';
import Navbar  from './Navbar/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0) 

  return (
    <> 
    <Navbar> 
    </Navbar>
    <Hooks />
    
    <Hello  name={"World"} question={"how are you?"}/> 
    <Hello  name={"Earth"}/>
    <Hello  name={"Sheki"}/>
  
  <div className='myCardContainer'>
    <Card
        title={"React"}
        link={"https://react.dev"}
        logo={<img src={reactLogo} alt="React Logo" />} 
      />
      <Card
        title={"Vite"}
        link={"https://vitejs.dev"}
        logo={<img src={viteLogo} alt='vite Logo'/>}
      />
     </div>
      {/*
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
  */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       

        {/*
           <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
*/}
       
      </div>
       {/*
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>*/}
      
    </>
  )
}

export default App
