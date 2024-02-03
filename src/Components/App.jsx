import { useState, useEffect } from 'react';
import { Description } from './Description/Description.jsx'
import { Options } from './Options/Options.jsx';
import { Feedback } from './Feedback/Feedback.jsx';


export const App = () => {

   const initialFeedbackTypes = JSON.parse(localStorage.getItem('feedbackTypes')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedbackTypes, setFeedbackTypes] = useState(initialFeedbackTypes);
 useEffect(() => {
    localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const handleFeedback = (type) => {
    setFeedbackTypes((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const handleReset = () => {
    setFeedbackTypes({ good: 0, neutral: 0, bad: 0 });
  };

  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;
  const positivePercentage = Math.round(((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100);

  return (<div>
       <Description />
      <Options onLeaveFeedback={handleFeedback} onReset={handleReset} feedbackTypes={feedbackTypes} />
      <Feedback feedbackTypes={feedbackTypes} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
    </div>
    
  )   
}