import { Card } from "react-bootstrap";

export default function Call({ data }) {
  return (
    <>
      <Card
        border="info"
        className="text-center mt-2"
        style={{ height: "150px" }}
      >
        <Card.Body>
          <Card.Title>Call Queue</Card.Title>
          <hr />
          <Card.Text>
            <Card className="bg-info">
              <Card.Text>
                <h1>{data}</h1>
              </Card.Text>
            </Card>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
