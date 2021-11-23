import { useState, useEffect } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

export function Example({ initialCount }) {
  // Deklarasi variabel state baru => Count
  const [Count, setCount] = useState(initialCount);
  return (
    <>
      <div>
        <p>Anda menekan sebanyak {Count} kali</p>
        <button onClick={() => setCount(Count + 1)}>Click Me</button>
      </div>
    </>
  );
}

export function Example1() {
  // Deklarasi variabel state baru => Count
  const [Count, setCount] = useState(0);

  // mirip dengan componentDidMount dan ComponentDidUpdate
  useEffect(() => {
    // memperbaharui judul dokumen menggunakan api browser
    document.title = `you clicked ${Count} times`;
  });
  return (
    <>
      <div>
        <p>You clicked {Count} times</p>
        <button onClick={() => setCount(Count + 1)}>Click Me</button>
      </div>
    </>
  );
}
