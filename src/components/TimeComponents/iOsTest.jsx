import React, { useState } from 'react';

function AgeCalculator({userBirthInput}) {
  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0
  });

  function calculateAge(birthday) {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    setAge({
      years: Math.abs(ageDate.getUTCFullYear() - 1970),
      months: Math.abs(ageDate.getUTCMonth()),
      days: Math.abs(ageDate.getUTCDate() - 1)
    });
  }

  return (
    <div>
      <input
        id="native-date-picker"
        type="date"
        placeholder="YYYY / MM / DD"
        onChange={e => calculateAge(new Date(e.target.value))}
        required
      />
      <p>
        Age: {age.years} years, {age.months} months, {age.days} days
      </p>
    </div>
  );
}

export default AgeCalculator;
