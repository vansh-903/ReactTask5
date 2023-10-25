import React, { useState } from 'react';

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const dob = new Date(birthDate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - dob;
    const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));

    setAge(ageInYears);
  };

  return (
    
    <div className="container mt-5 m-auto ">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Age Calculator</h3>
              <div className="form-group">
              <div class="text-center pb-3"> <label class="fw-bold">Enter your date of birth:</label></div>
                <input
                  type="date"
                  className="form-control"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div class="text-center pt-3">
              <button className="btn btn-primary" onClick={calculateAge}>
                Calculate Age
              </button></div>
              {age !== null && (
                <div className="mt-3 text-center">
                  <p class="fw-bold">You are {age} years old. </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default AgeCalculator;