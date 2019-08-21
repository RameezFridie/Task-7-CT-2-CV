import React from 'react';
// Importing css file
import './App.css';
// Importing components
import { Education } from './components/Education.jsx';
import { Skills } from './components/Skills.jsx';
import { Personal } from './components/Personal.jsx';


function App() {
  return (
    <div>
      <div>
        {/* Loading personal component */}
        <Personal/>
      </div>
      <div>
        {/* Loading education component */}
        <Education/>
      </div>
      <div>
        {/* Loading skills component */}
        <Skills/>
      </div>
    </div>
  );
}
// Exporting app function
export default App;
