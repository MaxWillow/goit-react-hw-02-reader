import React from 'react';
import T from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  onPrevClick,
  onNextClick,
  prevBtnDisabled,
  nextBtnDisabled,
}) => (
  <section className={styles.section}>
    <button
      type="button"
      onClick={onPrevClick}
      disabled={prevBtnDisabled}
      className={styles.button}
    >
      Prev
    </button>
    <button
      type="button"
      onClick={onNextClick}
      disabled={nextBtnDisabled}
      className={styles.button}
    >
      Next
    </button>
  </section>
);

Controls.propTypes = {
  onPrevClick: T.func.isRequired,
  onNextClick: T.func.isRequired,
  prevBtnDisabled: T.bool.isRequired,
  nextBtnDisabled: T.bool.isRequired,
};

export default Controls;
