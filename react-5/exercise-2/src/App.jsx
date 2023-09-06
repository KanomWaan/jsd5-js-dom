import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";
import Form from "./Form";

const App = () => {
  const [members, setMembers] = useState([]);
  const [reload,setreload] = useState();

  // started life cycle here
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };

    getData();
  }, [reload]);
  // update here
  const updateData = async (id, name, age, weight, status) => {
    const requestData = {
      id: id,
      name: name,
      age: age,
      weight: weight,
      status : status,
    }
    const response = await axios.put(
      "https://jsd5-mock-backend.onrender.com/members",
      requestData
    );

    if(response.status === 200) {
      setreload(!reload);
    }
  }
  // create here
  const createData = async (name, age, weight, status) => {
    const requestData = {
      name: name,
      age: age,
      weight: weight,
      status : status,
    }
    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      requestData
    );

    if(response.status === 200) {
      setreload(!reload);
    }
  }


  return (
    <div className="container">
      <Form updateHandler={updateData} 
          createHandler={createData}/>
      <div className="card-container">
        {members.map((member) => (
          <Card
            age={member.age}
            name={member.name}
            id={member.id}
            status={member.status}
            weight={member.weight}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
