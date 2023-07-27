import React, { useEffect, useState } from "react";

const UserEffect = () => {
  const [name, setName] = useState("");
  const [ranNum, setRanNum] = useState(0);
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const Timer = setTimeout(() => {
      console.log("timeout");
      setRanNum(Math.floor(Math.random() * 10));
      prompt("IM IN");
    }, 5000);

    return () => {
      console.log("clear");
      clearTimeout(Timer);

    };
  }, [name]);

  const animalList = ["Goat", "Bingo", "Lion", "Cat", "Sheep", "Tiger"];
  const handleAddAnimal = (e) => {

    if(![...animals].includes(e.target.value)){
          setAnimals( [...animals, e.target.value] );
    }}


  return (
    <div>
      <select onChange={handleAddAnimal}>
        <option disabled>select animal</option>
        {animalList.map((animal, index) => (
          <option value={animal} key={index}>
            {animal}
          </option>
        ))}{" "}
      </select>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h2>I am {ranNum} years</h2>

      <div>
        {animals.map((name, index) => (
        <p key={index}>{name}</p>
        ))}
      </div>
    </div>
  );
};

export default UserEffect;
