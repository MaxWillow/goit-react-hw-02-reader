import React, { Component } from 'react';
import T from 'prop-types';
import styles from './Reader.module.css';
import Controls from './Controls/Controls';
import Progress from './Progress/Progress';
import Publication from './Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        id: T.string.isRequired,
        title: T.string.isRequired,
        text: T.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    publicationIndex: 0,
  };

  handleClickPrev = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - 1,
    }));
  };

  handleClickNext = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const publication = items[publicationIndex];

    return (
      <div className={styles.readerContainer}>
        <Controls
          onPrevClick={this.handleClickPrev}
          onNextClick={this.handleClickNext}
          prevBtnDisabled={publicationIndex === 0}
          nextBtnDisabled={publicationIndex === items.length - 1}
        />
        <Progress
          currentPage={publicationIndex + 1}
          totalPages={items.length}
        />
        <Publication title={publication.title} text={publication.text} />
      </div>
    );
  }
}
