import React from 'react'
import InfoDisplay from './components/InfoDisplay'
import SummaryDisplay from './components/SummaryDisplay'
import './App.css';
const App = () => {
  return (
    <main>
      <div className = "app">
        <InfoDisplay />
        <SummaryDisplay />

      </div>

    </main> 
  )
}

export default App