export const Feedback = ({ feedbackTypes, totalFeedback, positivePercentage }) => {
  return (
    <div>
      {totalFeedback > 0 ? (
        <>
          <h2>Statistics</h2>
          <p>Good: {feedbackTypes.good}</p>
          <p>Neutral: {feedbackTypes.neutral}</p>
          <p>Bad: {feedbackTypes.bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};
export const Notification = ({ message }) => {
  return <p>{message}</p>;
};