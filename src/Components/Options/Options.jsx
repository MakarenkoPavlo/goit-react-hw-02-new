export const Options = ({ onLeaveFeedback, onReset, feedbackTypes }) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      <button onClick={onReset} disabled={!Object.values(feedbackTypes).some((value) => value !== 0)}>
        Reset
      </button>
    </div>
  );
};