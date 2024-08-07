import React from 'react';
import './Result.css';

function Result({ result }) {
  let resultClass = '';
  let message = '';

  if (result.chance === 'High Chance') {
    resultClass = 'result-high';
    message = 'Congratulations! You have a high chance of admission!';
  } else if (result.chance === 'Medium Chance') {
    resultClass = 'result-medium';
    message = 'You have a medium chance of admission.';
  } else {
    resultClass = 'result-low';
    message = 'You have a low chance of admission.';
  }

  return (
    <div id="result" className={`card mt-4 ${resultClass}`}>
      <div className="card-body">
        <h2>Results</h2>
        <p>Total Score: {result.totalScore}</p>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Result;
