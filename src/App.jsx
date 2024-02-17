import { useState } from "react";
import { useEffect } from "react";
import { Description } from "./components/Description/Description";
import { Options } from "./components/Options/Options";
import { Feedback } from "./components/Feedback/Feedback";
import { Notification } from "./components/Notification/Notification";
import "./App.css";

const feedbackData = () => {
  return localStorage.getItem("feedback") !== null
    ? JSON.parse(localStorage.getItem("feedback"))
    : { good: 0, neutral: 0, bad: 0 };
};

function App() {
  const [feedback, setFeedback] = useState(feedbackData);

  const updateFeedback = (type) => {
    setFeedback({
      ...feedback,
      [type]: feedback[type] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positive = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback), [feedback]);
  });

  return (
    <div>
      <Description />
      <Options
        onTrack={(type) => {
          updateFeedback(type);
        }}
        total={totalFeedback}
        setFeedback={setFeedback}
      />
      {totalFeedback >= 1 ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positive={positive}
        />
      ) : <Notification />}

    </div>
  );
}

export default App;
