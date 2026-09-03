import { useState } from "react";
import "./App.css"

function App() {
  // Counter States
  const [count, setCount] = useState(0);

  // Percentage States
  const [obtMarks, setObtMarks] = useState(0);
  const [totalMarks, setTotalMarks] = useState(0);
  const [percentage, setPercentage] = useState(0);

  // BMI States
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmicalculate, setBmicalculate] = useState(0);

  // Increment
  function increament() {
    setCount(count + 1);
  }

  // Decrement
  function decreament() {
    setCount(count - 1);
  }

  // Percentage Calculate
  function calculatePercentage(e) {
    e.preventDefault();

    if (totalMarks === 0) {
      setPercentage(0);
      return;
    }

    const result = (obtMarks / totalMarks) * 100;

    setPercentage(result);
  }

  // BMI Calculate
  function calculateBMI(e) {
    e.preventDefault();

    if (height === 0 || weight === 0) {
      setBmicalculate(0);
      return;
    }

    // Height is entered in centimeters
    const heightInMeters = height / 100;

    const bmi = weight / (heightInMeters * heightInMeters);

    setBmicalculate(bmi);
  }

  return (
    <div>
      {/* Counter */}
      <div>
        <h1>Count: {count}</h1>

        <button onClick={increament}>Increment</button>
        <button onClick={decreament}>Decrement</button>
      </div>

    

      {/* Percentage Calculator */}
      <div>

        <form onSubmit={calculatePercentage}>
          <input
            type="number"
            name="obtMarks"
            id="obtMarks"
            onChange={(e) => {
              setObtMarks(Number(e.target.value));
            }}
          />

        
          <br />

          <input
            type="number"
            name="totalMarks"
            id="totalMarks"
            onChange={(e) => {
              setTotalMarks(Number(e.target.value));
            }}
          />

          
          <br />

          <button type="submit">Calculate Percentage</button>
        </form>

        <h3>Your Calculated Percentage: {percentage}%</h3>
      </div>

    

      {/* BMI Calculator */}
      <div>
      

        <form onSubmit={calculateBMI}>
          <input
            type="text"
            name="weight"
            id="weight"
            onChange={(e) => {
              setWeight(Number(e.target.value));
            }}
          />

          
          <br />

          <input
            type="text"
            name="height"
            id="height"
            onChange={(e) => {
              setHeight(Number(e.target.value));
            }}
          />

          <br />

          <button type="submit">Calculate BMI</button>
        </form>

        <h3>Your Calculated BMI: {bmicalculate}</h3>
      </div>
    </div>
  );
}

export default App;