import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [lastreading, setLastReading] = useState();
  const [currentReading, setCurrentReading] = useState();
  const [consumedUnit, setConsumedUnit] = useState(0);
  const [billamount, setBillAmount] = useState(0);

  const calculate = () => {
    setUnits();
    setBill();
  };
  function setUnits() {
    setConsumedUnit(currentReading - lastreading);
  }
  function setBill() {
    if (consumedUnit <= 100) {
      setBillAmount(consumedUnit * 1);
    } else if (consumedUnit <= 200) {
      setBillAmount(100 * 1 + (consumedUnit - 100) * 2);
    } else if (consumedUnit <= 300) {
      setBillAmount(100 * 1 + 100 * 2 + (consumedUnit - 200) * 3);
    }
  }

  return (
    <div className="container">
      <h2 className="header">EB Bill Calculator</h2>
      <input
        className="inputBox"
        type="number"  //it takes only Number Inputs
        placeholder="Enter Last Reading"
        onChange={(value) => setLastReading(value.target.value)}
        className="inputBox"
        value={lastreading}
      ></input>
      <input
        className="inputBox"
        type="number" //it takes only Number Inputs
        placeholder="Enter Current Reading"
        onChange={(value) => setCurrentReading(value.target.value)}
        className="inputBox"
        value={currentReading}
      ></input>
      <button
        onClick={calculate}
        type="button"
        class="btn btn-outline-primary btn-lg"  //Bootstrap Button for UI
      >
        Calculate
      </button>
      <text>{}</text>
      <text>Consumed Unit : {consumedUnit}</text>
      <text>Bill Amount : {billamount}</text>
    </div>
  );
}

export default App;
