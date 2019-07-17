import "./user-shipping.scss";
import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useSubmitForm from "../CustomHooks";
import api from "../api/api";

export default function UserShipping({ shippings, setShippings }) {
  const { inputs, handleInputChange, handleSubmit, validated } = useSubmitForm(
    {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      email: "",
      phone: "",
      notes: ""
    },
    async () => {
      const { data } = await api.post("/shipping", inputs);
      if (data._id) {
        setShippings([...shippings, data]);
        alert(`Shipping was added succesfully: \r\n ${JSON.stringify(data)}`);
      } else {
        alert(`Shipping was not added: \r\n ${JSON.stringify(data)}`);
      }
    }
  );

  return (
    <Container>
      <Row>
        <Col>
          <Form
            className="user-shipping-form"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="firstName">
              <Form.Label>* First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                name="firstName"
                pattern="[a-zA-Z]+"
                required
                onChange={handleInputChange}
                value={inputs.firstName}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>* Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastName"
                pattern="[a-zA-Z]+"
                required
                onChange={handleInputChange}
                value={inputs.lastName}
              />
            </Form.Group>
            <Form.Group controlId="address">
              <Form.Label>* Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter street address ('123 Main St') "
                name="address"
                pattern="[a-zA-Z0-9-\s,]+"
                required
                onChange={handleInputChange}
                value={inputs.address}
              />
            </Form.Group>
            <Form.Group controlId="city">
              <Form.Label>* City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter (city, state and ZIP)"
                name="city"
                pattern="[a-zA-Z0-9-\s,]+"
                required
                onChange={handleInputChange}
                value={inputs.city}
              />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>* Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email address"
                name="email"
                required
                onChange={handleInputChange}
                value={inputs.email}
              />
            </Form.Group>
            <Form.Group controlId="phone">
              <Form.Label>* Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phone"
                pattern="\d{1,10}"
                required
                onChange={handleInputChange}
                value={inputs.phone}
              />
            </Form.Group>
            <Form.Group controlId="notes">
              <Form.Label>
                <Row>
                  <Col>Notes</Col>
                  <Col>
                    <Form.Text className="text-muted symbols-count">
                      Symbols: {inputs.notes.length}
                    </Form.Text>
                  </Col>
                </Row>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="notes"
                maxLength="500"
                onChange={handleInputChange}
                value={inputs.notes}
              />
              <Form.Text className="text-muted">* Required fields</Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
