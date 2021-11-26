import { Card, CardGroup, Row } from "react-bootstrap";
import "./arrow.css";

export default function ListQueue({ listData }) {
  return (
    <>
      <Card className="mt-4 border-info">
        <Card.Body>
          <Card.Title className="text-center">
            Queue length : {listData.length}
          </Card.Title>
          <hr />
          <Row xs={1} md={4} className="g-4 mt-2 m-auto">
            {listData.map((queue, i) => (
              <div key={i}>
                <CardGroup>
                  <Card className="bg-secondary">
                    <Card.Body>
                      <p className="m-auto text-center text-info col">
                        {queue}
                        <i className="arrow-5 text-center"></i>
                      </p>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </div>
            ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}
