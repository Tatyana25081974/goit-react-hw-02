import { useState,useEffect } from 'react'
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import styles from "./App.module.css";

 export default function App() {
  const savedFeedback = localStorage.getItem('feedback');
  const initialFeedback = savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(initialFeedback);

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);
  
     const handleFeedback =(type) => {
    setFeedback({
      good: type === 'good' ? feedback.good + 1 : feedback.good,
      neutral: type === "neutral" ? feedback.neutral + 1 : feedback.neutral,
      bad: type === "bad" ? feedback.bad + 1 : feedback.bad,
      
    });
  };
   const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

   const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

   const positiveFeedback =
     totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
   
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sip Happens Café</h1>
      <p className={styles.description}>Please leave your feedback about our service by selecting one of the options below.</p>
      <Options onLeaveFeedback={handleFeedback} onReset={resetFeedback} totalFeedback={totalFeedback} />

       {totalFeedback > 0 ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      ): (
        <Notification message="No feedback yet" />
      )}
      
    </div>
  )
}


