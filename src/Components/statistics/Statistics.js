import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ Good, Neutral, Bad, total, positivePercentage }) => {
  return (
    <>
      <p>Good: {Good}</p>
      <p>Neutral: {Neutral}</p>
      <p>Bad: {Bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage} %</p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  Good: PropTypes.number.isRequired,
  Neutral: PropTypes.number.isRequired,
  Bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
};
