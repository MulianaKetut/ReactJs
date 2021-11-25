import { Link, Outlet } from "react-router-dom";

export default function About() {

  return (
    <>
      <h1>About</h1>
      <h2>Who do you want to see?</h2>
      <ul>
        <li>
          <Link to={`/about/${1}`}>ID 1</Link>
        </li>
        <li>
          <Link to={`/about/${2}`}>ID 2</Link>
        </li>
      </ul>

      <Outlet />
    </>
  );
}
