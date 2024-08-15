import React, { useState } from 'react';
import './App.css';
import CalculatorForm from './CalculatorForm';
import Result from './Result';
import FormulaModal from './FormulaModal';

function App() {
  const [result, setResult] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app-container">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">University Admission Chances Calculator</h1>
          <CalculatorForm setResult={setResult} />
          {result && <Result result={result} />}
        </div>
      </div>
      <div className="disclaimer">
        <p>Note: This tool provides an estimation based on the input values. The actual admission chances may vary.</p>
        <p>For more details on the formula used, please visit the <button className="link-button" onClick={handleShowModal}>formula page</button>.</p>
      </div>
      {showModal && <FormulaModal handleCloseModal={handleCloseModal} />}
    </div>
  );
}

export default App;
