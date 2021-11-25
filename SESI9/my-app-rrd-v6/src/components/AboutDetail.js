import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function AboutDetail() {
  let params = useParams();
  console.log(params);

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`).then(
      (res) => res.json().then((data) => setUser(data))
    );
  }, [params.id]);

  return (
    <>
      <h1>About Detail</h1>
      <h2>Hallo {user.name}</h2>
    </>
  );
}
