import { Container, Row, Col } from "react-bootstrap";
export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={15} sm={20}>
            <h1>For any queries contact us</h1>
            <br />
            <h3>Email :</h3>
            <h5>innovisioncsercciit@gmail.com</h5>
            <br />
            <h3>Coordinators :</h3>
            <h5 className="coordinators">
              Swastika Bose:+917044669104 &nbsp; Sansrita Saha:+917003612844
              &nbsp; Atalanta Dey:+919163175925 &nbsp; Srijan
              Mondal:+916294329864 &nbsp; Anamitra Sengupta: +919163708561
              &nbsp; Amit RoyChowdury :+917364828740
            </h5>
            <br />
            <h3>Tech Team :</h3>
            <h5 className="techteam">
              Debopom Banerjee:+919475260487 &nbsp; Arghya Dutta:+919051244326
              &nbsp; Shauryam Dubey :+916203940031
            </h5>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
