import React from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

export default function AdminShipping({ shippings }) {
  return (
    <Container>
      <Row>
        <Col>
          <Table striped bordered hover className="admin-shipping-table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Email address</th>
                <th>Phone number</th>
                <th>Special notes</th>
              </tr>
            </thead>
            <tbody>
              {shippings.length ? (
                shippings.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.firstName}</td>
                    <td>{item.lastName}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.notes}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No entities</td>
                </tr>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
