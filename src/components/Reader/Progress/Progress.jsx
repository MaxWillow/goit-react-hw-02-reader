import React from 'react';
import T from 'prop-types';
import styles from './Progres.module.css';

const Progress = ({ currentPage, totalPages }) => (
  <>
    <p className={styles.progressBar}>{`${currentPage} / ${totalPages}`}</p>
  </>
);

Progress.propTypes = {
  currentPage: T.number.isRequired,
  totalPages: T.number.isRequired,
};

export default Progress;
