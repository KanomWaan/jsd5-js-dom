import React, { useState, useEffect } from "react";

const App = () => {
    const [Fullname, setFullname] = useState("");
    const [Age, setAge] = useState("");
    const [Img, setImg] = useState("");

    
    useEffect(() => {
        
        setFullname(Fullname);
    }, [Fullname]);

   
    useEffect(() => {
        
        setAge(Age);
    }, [Age]);

    
    useEffect(() => {
        
        setImg(Img);
    }, [Img]);

    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={Fullname}
                onChange={(e) => setFullname(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter your Age"
                value={Age}
                onChange={(e) => setAge(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter your IMG"
                value={Img}
                onChange={(e) => setImg(e.target.value)}
            />
            <button onClick={() => setFullname("")}>Fullname</button>
            <button onClick={() => setAge("")}>Age</button>
            <button onClick={() => setImg("")}>Picture</button>
            <br />
            <h1>{Fullname}</h1>
            <h1>{Age}</h1>
            <img src={Img} alt="." />
        </div>
    );
};

export default App;
