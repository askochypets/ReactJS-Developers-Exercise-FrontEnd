import React, { useState, useEffect } from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import UserShipping from "./user-shipping/UserShipping";
import AdminShipping from "./admin-shipping/AdminShipping";
import RemoveShipping from "./remove-shipping/RemoveShipping";
import api from "./api/api";

export default function App() {
  const [shippings, setShippings] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await api.get("/shipping");

      setShippings(data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Tabs defaultActiveKey="userShipping" id="uncontrolled-tab-example">
              <Tab eventKey="userShipping" title="User Page">
                <UserShipping
                  shippings={shippings}
                  setShippings={setShippings}
                />
              </Tab>
              <Tab eventKey="adminShipping" title="Admin Page">
                <AdminShipping shippings={shippings} />
              </Tab>
              <Tab eventKey="removeShipping" title="Remove Shippings Page">
                <RemoveShipping setShippings={setShippings} />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
