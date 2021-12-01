import "bootstrap/dist/css/bootstrap.min.css";
import Kanban from "./pages/Kanban";

function App() {
  return (
    <>
      <div className="container">
        <div className="bg-info text-center">
          <h1>Kanban Board - 011</h1>
        </div>
        <div className="card">
          <div className="card-body">
            <Kanban />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
