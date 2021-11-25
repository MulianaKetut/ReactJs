import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect,
} from "react-router-dom";

import { useState, useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>|&nbsp;
      <Link to="/contact">Contact</Link>|&nbsp;
      <Link to="/about">About</Link>|&nbsp;
      <Link to="/abouts">Abouts</Link>|&nbsp;
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/abouts" component={Abouts} />
        <Route path="/contact" component={Contact} />
        <Redirect exact from="/" to="/home" />
        {/* <Route exact path="/about/:id" children={<About />}></Route> */}
      </Switch>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <>
      <h2>Home</h2>
    </>
  );
}

function About() {
  // let { name } = useParams();
  let { id } = useParams();

  const [user, setUser] = useState([]);

  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/users/1`).then((res) =>
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      res.json().then((data) => setUser(data))
    );
    return () => {};
  }, [id]);

  return (
    <>
      {/* <h2>Hallo {name}</h2> */}
      <h2>Hallo {user.name}</h2>
      {/* <p>{user.company.name}</p> */}
    </>
  );
}

function Contact() {
  return (
    <>
      <h2>Contact</h2>
    </>
  );
}

function Abouts() {
  let { path, url } = useRouteMatch();

  return (
    <>
      <h2>Who do you want to see?</h2>
      <ul>
        {/* <li>
          <Link to={`${url}/fulan`}>Fulan</Link>
        </li>
        <li>
          <Link to={`${url}/fulana`}>Fulana</Link>
        </li> */}
        <li>
          <Link to={`${url}/1`}>ID 1</Link>
        </li>
        <li>
          <Link to={`${url}/2`}>ID 2</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a name</h3>
        </Route>
        {/* <Route exact path={`${path}/:name`}>
          <About />
        </Route> */}
        <Route path={`${path}/:id`}>
          <About />
        </Route>
      </Switch>
    </>
  );
}

function ProtectedPage(){
  let auth = auth.signedIn()

  if(!auth){
    return(
      <Redirect to={{
        pathname: '/login',
      }}/>
    )
  }

  return(
    <>
      <h1>Contact</h1>
    </>
  )

}

export default App;
