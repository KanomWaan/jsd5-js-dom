import React, { useState, useEffect } from "react";

const App = () => {
  const [rate, setRate] = useState(0);
  const [exchange, setExchange] = useState(1);
  const [switcher, setSwitch] = useState(false);

  const syncRate = () => {
    setRate(30);
  };

  const handleExchangeChange = (event) => {
    const newExchange = event.target.value;
    setExchange(newExchange);
  };

  useEffect(syncRate, []);

  return (
    <div>
      <h1>Current Rate: {rate}</h1>
      {switcher === true && <Button />}
      <input type="number" value={exchange} onChange={handleExchangeChange} />
      <h2>Calculated Exchange: {exchange * rate}</h2>
      <button onClick={() => setSwitch((prev) => !prev)}>SWITCH</button>
    </div>
  );
};

const Button = () => {
  useEffect(() => {
    alert("Create Button Component");

    return activeWhenDestoryComponent;
  }, []);

  const activeWhenDestoryComponent = () => {
    alert("active when componenet is destoryed.");
  };

  return <button>Sync Rate</button>;
};

export default App;