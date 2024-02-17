import css from "./Options.module.css";

export const Options = ({ onTrack, total, setFeedback }) => {
  return (
    <>
      <ul className={css.listBtn}>
        <li>
          <button className={css.button} onClick={() => onTrack("good")}>
            Good
          </button>
        </li>
        <li>
          <button className={css.button} onClick={() => onTrack("neutral")}>
            Neutral
          </button>
        </li>
        <li>
          <button className={css.button} onClick={() => onTrack("bad")}>
            Bad
          </button>
        </li>
        {total >= 1 && (
          <li>
            <button
              className={css.button}
              onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })}
            >
              Reset
            </button>
          </li>
        )}
      </ul>
    </>
  );
};
