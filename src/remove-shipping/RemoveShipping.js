import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import api from "../api/api";

export default function RemoveShipping({ setShippings }) {
  const removeAllShippings = async () => {
    const { data } = await api.delete("/shipping");
    setShippings([]);
    alert(
      `Shipping was deleted succesfully: \r\n The number of documents deleted: ${
        data.n
      } \r\n The status of the command: ${data.ok}`
    );
  };

  return (
    <Container>
      <Row>
        <Col>
          <Button variant="primary" type="button" onClick={removeAllShippings}>
            Remove all shippings
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
