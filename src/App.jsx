import { useState } from 'react'
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import './App.css'

function App() {
 const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
 });
  const handleFeedback =(type) => {
    setFeedback({
      good: type === 'good' ? feedback.good + 1 : feedback.good,
      neutral: type === "neutral" ? feedback.neutral + 1 : feedback.neutral,
      bad: type === "bad" ? feedback.bad + 1 : feedback.bad,
      
    });
  };
  return (
    <div >
      <h1>Sip Happens Café</h1>
      <p>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options onLeaveFeedback={handleFeedback} />
      <Feedback feedback={feedback} />
    </div>
  )
}

export default App;
