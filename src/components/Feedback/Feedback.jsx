
import styles from "../../components/Feedback/Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  return (
    <div className={styles.statistics}>
      <h2 className={styles.title}>Statistics</h2>
      <p className={styles.text}>Good: {feedback.good}</p>
      <p className={styles.text}>Neutral: {feedback.neutral}</p>
      <p className={styles.text}>Bad: {feedback.bad}</p>
      <p className={styles.text}>Total: {totalFeedback}</p>
      <p className={styles.positive}>Positive feedback: {positiveFeedback}%</p>
    </div>
  );
};
export default Feedback;