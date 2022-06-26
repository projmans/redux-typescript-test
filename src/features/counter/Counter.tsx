import { useState } from "react";

import { useAppDispatch } from "../../state/store";
import { actions } from "../../state/counterSlice";
import { useCounter, useStatus } from "../../state/selectors";
import styles from "./Counter.module.css";

export const Counter = () => {
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(actions.decrement())}
        >
          -
        </button>
        <span className={styles.value}>{useCounter()}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(actions.increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <span>{useStatus()}</span>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(actions.incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(actions.incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(actions.incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
