import { useState } from "react";
import Quote from "./Quote";

export default function Profile() {
  const [personData, setPersonData] = useState({
    name: "Muliana",
    age: 22,
  });
  const [quotes, setQuotes] = useState("kerja, kerja, kerja, tipes!");

  const changeData = () => {
    const newData = {
      name: "Ketut",
      age: 21,
    };
    const newQuote = "#taytb";
    // change quotes
    setQuotes(newQuote);

    // update all property
    setPersonData({ ...personData, ...newData });

    //just update name
    // setPersonData({ ...personData, name: "Ketut" });

    // add new data but data must be array type
    // setPersonData({ newData, ...personData });
  };

  // sama seperti diatas
  const handleChangeProfile = () => {
    const newData = {
      name: "Ketut Muliana",
      age: 21,
    };

    setPersonData((prevPersonData) => ({
      ...prevPersonData,
      ...newData,
    }));
  };

  return (
    <>
      <h1>Person Information</h1>
      <div>
        <span>Name: {personData.name}</span>
        <br />
        <span>Age: {personData.age}</span>
        <br />
        <span>
          Quote: <Quote quotes={quotes}></Quote>
        </span>
      </div>
      <button onClick={changeData}>Change Data</button>
      <button onClick={handleChangeProfile}>Change Data Profile</button>
    </>
  );
}
