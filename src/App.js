import React from 'react';
import './App.css';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Work } from './components/Work';
import { Personal } from './components/Personal';


function App() {
  return (
    <div>
      <div>
        <Personal/>
      </div>
      <div>
        <Education/>
      </div>
      <div>
        <Skills/>
      </div>
    </div>
  );
}

export default App;
