import { useState, useEffect } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // component did mount
    const timerID = setInterval(tick, 1000);
    // component did update di sini
    return () =>
      // component will unmount => unsubscribe and garbage collection
      clearInterval(timerID);

    // array dipakai jika diperluka
  }, []);

  function tick() {
    setDate(new Date());
  }

  return (
    <>
      <div>
        <h1>Function Realtime CLOCK</h1>
        <hr />
        <h1>{date.toLocaleDateString()}</h1>
        <h1>{date.toLocaleTimeString()}</h1>
      </div>
    </>
  );
}
