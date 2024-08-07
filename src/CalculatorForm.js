import React, { useState } from 'react';

function CalculatorForm({ setResult }) {
  const [formData, setFormData] = useState({
    gpa: '',
    sat: '',
    workExp: '',
    qualityWorkExp: '90',
    extracurriculars: '',
    levelExtracurriculars: '90',
    awards: '',
    levelAwards: '75',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateScore = () => {
    const { gpa, sat, workExp, qualityWorkExp, extracurriculars, levelExtracurriculars, awards, levelAwards } = formData;

    const normalizedGPA = ((parseFloat(gpa) - 2.0) / (4.0 - 2.0)) * 100;
    const normalizedSAT = ((parseFloat(sat) - 400) / (1600 - 400)) * 100;
    const normalizedWorkExp = parseFloat(workExp) >= 3 ? 75 : 50;

    const totalScore = (normalizedGPA * 0.25) + (normalizedSAT * 0.20) + (normalizedWorkExp * 0.10) +
                       (parseFloat(qualityWorkExp) * 0.10) + ((parseFloat(extracurriculars) >= 4 ? 75 : 50) * 0.10) +
                       (parseFloat(levelExtracurriculars) * 0.10) + ((parseFloat(awards) >= 2 ? 50 : 25) * 0.10) +
                       (parseFloat(levelAwards) * 0.05);

    let chance = '';
    if (totalScore > 75) {
        chance = 'High Chance';
    } else if (totalScore > 50) {
        chance = 'Medium Chance';
    } else {
        chance = 'Low Chance';
    }

    setResult({ totalScore: totalScore.toFixed(2), chance });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); calculateScore(); }} className="form-group">
      <label>GPA:</label>
      <input type="number" name="gpa" value={formData.gpa} onChange={handleChange} min="0" max="4" step="0.1" required className="form-control"/>
      
      <label>SAT Score:</label>
      <input type="number" name="sat" value={formData.sat} onChange={handleChange} min="400" max="1600" step="10" required className="form-control"/>
      
      <label>Years of Work Experience:</label>
      <input type="number" name="workExp" value={formData.workExp} onChange={handleChange} min="0" max="10" required className="form-control"/>
      
      <label>Quality of Work Experience:</label>
      <select name="qualityWorkExp" value={formData.qualityWorkExp} onChange={handleChange} required className="form-control">
        <option value="90">Mid-level</option>
        <option value="75">Entry-level</option>
        <option value="100">High-level</option>
      </select>
      
      <label>Number of Extracurriculars:</label>
      <input type="number" name="extracurriculars" value={formData.extracurriculars} onChange={handleChange} min="0" max="10" required className="form-control"/>
      
      <label>Level of Extracurriculars:</label>
      <select name="levelExtracurriculars" value={formData.levelExtracurriculars} onChange={handleChange} required className="form-control">
        <option value="90">National</option>
        <option value="75">Regional</option>
        <option value="50">Local</option>
      </select>
      
      <label>Number of Awards:</label>
      <input type="number" name="awards" value={formData.awards} onChange={handleChange} min="0" max="10" required className="form-control"/>
      
      <label>Level of Awards:</label>
      <select name="levelAwards" value={formData.levelAwards} onChange={handleChange} required className="form-control">
        <option value="75">Regional</option>
        <option value="50">Local</option>
        <option value="100">National</option>
      </select>
      
      <button type="submit" className="btn btn-primary btn-block">Calculate</button>
    </form>
  );
}

export default CalculatorForm;
