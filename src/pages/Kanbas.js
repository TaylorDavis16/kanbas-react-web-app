import Sidebar from "../components/Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import "./kanbas.css";

export default function Kanbas() {
  return (
    <Container fluid className="kanbas d-flex p-0 m-0">
      <Row className="flex-grow-1">
        <Col className="col-12 col-sm-12 sidebar-col">
          <Sidebar />
        </Col>
        <Col className="col-sm-3">
          Content
        </Col>
        <Col className="col-sm-3">
          Subcontent
        </Col>
        <Col className="col-sm-3">
          Other
        </Col>
      </Row>
    </Container>
  );
}
