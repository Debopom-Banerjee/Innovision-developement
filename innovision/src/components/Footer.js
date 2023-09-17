import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon py-3">
              <a href="https://discord.gg/Sz7uAMyU">
                <img src={navIcon1} alt="Discord" />
              </a>
              <a href="https://www.facebook.com/innovisionrcc/">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://www.instagram.com/innovisionrcc/ ">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
            <br />
            <p>©2023 Innovision™. All Rights Reserved</p>
            <p className="footer-p">Made with ♡ by Innovision Tech Team</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
