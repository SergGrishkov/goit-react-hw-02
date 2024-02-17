import css from './Feedback.module.css';

export const Feedback = ({ feedback, total, positive }) => {
  const { good, neutral, bad } = feedback;
  return (
    <>
      <ul className={css.list}>
        <li className={css.listItem}>
          <p className={css.text}>Good: {good}</p>
        </li>
        <li className={css.listItem}>
          <p className={css.text}>Neutral: {neutral}</p>
        </li>
        <li className={css.listItem}>
          <p className={css.text}>Bad: {bad}</p>
        </li>
        <li className={css.listItem}>
          <p className={css.text}>Total: {total}</p>
        </li>
        <li className={css.listItem}>
          <p className={css.text}>Positive: {positive}%</p>
        </li>
      </ul>
    </>
  );
};