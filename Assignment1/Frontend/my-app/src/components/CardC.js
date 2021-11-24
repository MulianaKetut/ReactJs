import { Card, Button, Modal } from "react-bootstrap";
import { format } from "date-fns";
import { useState } from "react";

export default function CardC({ article }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="text-center">
        <Card.Img variant="top" src="https://placeimg.com/286/180/tech" />
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.body.slice(0, 147) + "..."}</Card.Text>
          <footer className="blockquote-footer mt-2">
            <cite>{format(new Date(article.date), "yyyy/MM/dd kk:mm:ss")}</cite>
          </footer>
          <Button variant="primary" onClick={() => setShow(true)}>
            Read more
          </Button>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Article - {article.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="text-center">
            <Card.Img variant="top" src="https://placeimg.com/286/180/tech" />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <div className="blockquote-footer mt-3">
                <cite>
                  {format(new Date(article.date), "yyyy/MM/dd kk:mm:ss")}
                </cite>
              </div>
              <Card.Text>{article.body}</Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}
