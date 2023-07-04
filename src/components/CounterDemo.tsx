import { useState } from "react";

function CounterDemo(): JSX.Element {
  const [counterValueFromCurrentRender, queueRerenderWithNewCounterValue] =
    useState(0);

  const handleAddOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 1);
  };

  const handleAddFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender + 5);
  };

  const handleSubstractFive = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 5);
  };

  const handleSubstractOne = () => {
    queueRerenderWithNewCounterValue(counterValueFromCurrentRender - 1);
  };

  const handleReset = () => {
    queueRerenderWithNewCounterValue(0)
  }

  return (
    <>
      <h1>Counter Demo</h1>
      <p>Current value: {counterValueFromCurrentRender}</p>
      <button onClick={handleAddOne}>+1</button>
      <button onClick={handleAddFive}>+5</button>
      <button onClick={handleSubstractOne}>-1</button>
      <button onClick={handleSubstractFive}>-5</button>
      <hr />
      <button onClick={handleReset}>Reset counter</button>
    </>
  );
}

export default CounterDemo;
