import React, { useState } from 'react';
import './App.css';
import KeyDownFunctional from './KeyDownFunctional';
import KeyDownClass from './KeyDownClass';

function App() {
  const [toggle, setToggle] = useState(true);
  
  return <>
    <h1>React keydown useEffect componentDidMount <span role="img" aria-label="keyboardemoji">⌨️</span></h1>
    <h2>The solution represents my answer to <a href="https://stackoverflow.com/questions/59546928/keydown-up-events-with-react-hooks-not-working-properly" target="_blank" rel="noopener noreferrer">this question</a> from Stack Overflow</h2>

    <div className="choiceRadio">
      <input type="radio" name="choice" value="class" checked={toggle} onChange={() => setToggle(true)} />
      <label htmlFor="class">Class Component</label>

      <input type="radio" name="choice" value="class" checked={!toggle} onChange={() => setToggle(false)} />
      <label htmlFor="class">Functional Component</label>
    </div>

    {toggle ? <KeyDownClass /> : <KeyDownFunctional />}
  </>
}

export default App;