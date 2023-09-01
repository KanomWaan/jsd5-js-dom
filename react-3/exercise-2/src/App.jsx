import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Name here"
        onChange={(evl) => setName(evl.target.value)}
      />
      <input
        type="text"
        placeholder="Short bio"
        onChange={(evl) => setBio(evl.target.value)}
      />
      <button onClick={() => submitHandler()}>Submit</button>
      <Info name={name} bio={bio} />
    </div>
  );
};

const Info = ({ name, bio }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{bio}</p>
    </div>
  );
};

export default App;