import styles from "./Options.module.css";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div className={styles.buttons}>
      <button className={`${styles.button} ${styles.good}`} onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button className={`${styles.button} ${styles.neutral}`} onClick={() => onLeaveFeedback("neutral")}>
        Neutral
      </button>
      <button className={`${styles.button} ${styles.bad}`} onClick={() => onLeaveFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={styles.button} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;

