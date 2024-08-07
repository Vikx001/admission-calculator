import React from 'react';
import './FormulaModal.css';

function FormulaModal({ handleCloseModal }) {
  return (
    <div className="modal-overlay" onClick={handleCloseModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Formula Details</h2>
            <p>Here is the complete detail of the formula being used and how it works in steps:</p>
            <ol>
              <li>GPA Normalization: <br />Normalized GPA = ((GPA - 2.0) / (4.0 - 2.0)) * 100</li>
              <li>SAT Normalization: <br />Normalized SAT = ((SAT - 400) / (1600 - 400)) * 100</li>
              <li>Years of Work Experience: <br />3-4 years = 75</li>
              <li>Quality of Work Experience: <br />Mid-level positions = 90</li>
              <li>Number of Extracurriculars: <br />4-5 = 75</li>
              <li>Level of Extracurriculars: <br />National = 90</li>
              <li>Number of Awards: <br />2-3 = 50</li>
              <li>Level of Awards: <br />Regional = 75</li>
              <li>Total Score Calculation: <br />Total Score = (Normalized GPA * 0.25) + (Normalized SAT * 0.20) + (Years of Work Experience * 0.10) + (Quality of Work Experience * 0.10) + (Number of Extracurriculars * 0.10) + (Level of Extracurriculars * 0.10) + (Number of Awards * 0.10) + (Level of Awards * 0.05)</li>
              <li>Determining Chances: <br />High Chance: Total Score greater than 75 <br />Medium Chance: Total Score between 50 and 75 <br />Low Chance: Total Score less than or equal to 50</li>
            </ol>
            <button className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormulaModal;
