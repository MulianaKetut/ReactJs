// import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logo.png";

export default function BootstrapCss() {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img
              src={logo}
              alt=""
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
          </a>
        </div>
      </nav>
    </>
  );
}
