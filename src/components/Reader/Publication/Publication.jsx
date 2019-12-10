import React from 'react';
import T from 'prop-types';
import styles from './Publication.module.css';

const Publication = ({ title, text }) => (
  <article className={styles.article}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{text}</p>
  </article>
);

Publication.propTypes = {
  title: T.string.isRequired,
  text: T.string.isRequired,
};

export default Publication;
