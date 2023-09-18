import { Container, Row, Col } from "react-bootstrap";
export const Contact = () => {
  return (
    <div className="contact border-1 border-white" id="contact">
      <div>
        <Row className="align-items-center">
          <Col size={15} sm={20}>
            <h1 className=" font-bold text-3xl">
              For any queries Contact Us
            </h1>
            <br />
            <h3 className=" font-bold text-2xl">Email :</h3>
            <h5>
              <a href="mailto:innovisioncsercciit@gmail.com" className="font-medium text-lg">
                innovisioncsercciit@gmail.com
              </a>
            </h5>
            <br />
            <h3 className=" font-bold text-2xl">Coordinators :</h3>
            <h5 className="coordinators font-medium text-lg">
              Anamitra Sengupta: +919163708561 &nbsp; Amit Roy Chowdury
              :+917364828740
            </h5>
            <br />
            <h3 className=" font-bold text-2xl">Tech Team :</h3>
            <h5 className="techteam font-medium text-lg">
              Debopom Banerjee:+919475260487 &nbsp; Arghya Dutta:+919051244326
              &nbsp; Shauryam Dubey :+916203940031
            </h5>
          </Col>
        </Row>
      </div>
    </div>
  );
};
