import { useState } from "react";
import Quote from "./Quote";

export default function Profile() {
  const [personData, setPersonData] = useState([
    {
      name: "Muliana",
      age: 22,
      quotes: "kerja, kerja, kerja, tipes!",
    },
  ]);

  const handleChangeProfile = (i) => {
    const newData = {
      name: "Ketut",
      age: 21,
      quotes: "#taytb",
    };
    const updateData = [...personData];
    updateData[i] = newData;
    // update all property
    setPersonData(updateData);
  };

  const handleAddProfile = () => {
    const newData = {
      name: "Ketut Muliana",
      age: 21,
      quotes: "#taytb #oye",
    };
    console.log([...personData]);
    setPersonData([...personData, newData]);
  };

  const handleRemoveProfile = (i) => {
    // assigning the list to temp variable
    const temp = [...personData];

    // removing the element using splice
    temp.splice(i, 1);

    // updating the list
    setPersonData(temp);
  };

  return (
    <>
      <h1>Person Information</h1>
      <div>
        {personData.map((person, i) => (
          <div key={i}>
            <span>Name: {person.name}</span>
            <br />
            <span>Age: {person.age}</span>
            <br />
            <span>
              Quote: <Quote quotes={person.quotes}></Quote>
            </span>
            <button onClick={() => handleChangeProfile(i)}>
              Change Data ke-{i}
            </button>
            <button onClick={() => handleRemoveProfile(i)}>
              Remove Data ke-{i}
            </button>
          </div>
        ))}
      </div>
      <button onClick={handleAddProfile}>Add Data Profile</button>
    </>
  );
}
