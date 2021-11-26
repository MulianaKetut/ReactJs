import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Card, Button, Form } from "react-bootstrap";
import ListQueue from "./ListQueue";

export default function Queue({ sendDataToParent, parentToChild }) {
  const [queue, setQueue] = useState([]);
  const [show, setShow] = useState(true);
  const [data, setData] = useState("");

  const handlerChange = (e) => {
    e.preventDefault();
    setData(String(e.target.value).toUpperCase());
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    queue.unshift(data);
    setQueue([...queue]);
    setData("");
    toast.success(`Submit ${data} successfully!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  useEffect(() => {
    handleHidden(queue);
  }, [queue, parentToChild]);

  const handleHidden = (x) => {
    if (x.length === 0 || x === undefined) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <ToastContainer />
      <Card border="info" className="text-center mt-2">
        <Card.Body>
          <Card.Title>Input Queue</Card.Title>
          <hr />
          <Card.Text>
            <Form onSubmit={handlerSubmit}>
              <Form.Group className="mb-3 m-5 mt-2">
                <Form.Label>Input Name</Form.Label>
                <Form.Control
                  onChange={handlerChange}
                  type="text"
                  value={data}
                  placeholder="Enter name"
                  required={true}
                />
              </Form.Group>
              <Button variant="info" type="submit">
                Submit
              </Button>
              &nbsp; &nbsp;
              {show ? (
                <Button
                  onClick={() => {
                    sendDataToParent(queue.pop());
                  }}
                  variant="info"
                >
                  Call
                </Button>
              ) : (
                <></>
              )}
            </Form>
          </Card.Text>
        </Card.Body>
      </Card>
      {show ? <ListQueue listData={queue} /> : <></>}
    </>
  );
}
