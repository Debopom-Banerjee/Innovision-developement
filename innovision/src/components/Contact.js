import { Container, Row, Col } from "react-bootstrap";
export const Contact = () => {
  return (
    <div className="contact border-1 border-white" id="contact">
      <div>
        <Row className="align-items-center">
          <Col size={15} sm={20}>
            <h1 className=" font-bold text-3xl">For any queries Contact Us</h1>
            <br />
            <h3 className=" font-bold text-2xl">Email :</h3>
            <h5>
              <a
                href="mailto:innovisioncsercciit@gmail.com"
                className="font-medium text-lg"
              >
                innovisioncsercciit@gmail.com
              </a>
            </h5>
            <br />
            <h3 className=" font-bold text-2xl">Coordinators :</h3>

            <div className="flex flex-wrap items-center md:gap-20">
              <div className="flex flex-wrap techteam font-medium text-lg">
                <h1> Anamitra Sengupta: </h1>
                <h1>+91 9163708561</h1>
              </div>
              <div className="flex flex-wrap techteam font-medium text-lg">
                <h1> Amit Roy Chowdury: </h1>
                <h1>+91 7364828740</h1>
              </div>
            </div>
            <br />
            <h3 className=" font-bold text-2xl">Tech Team :</h3>
            <div className="flex flex-wrap items-center md:gap-20">
              <div className="flex flex-wrap techteam font-medium text-lg">
                <h1> Debopom Banerjee : </h1>
                <h1>+91 9475260487</h1>
              </div>
              <div className="flex flex-wrap techteam font-medium text-lg">
                <h1> Arghya Dutta: </h1>
                <h1>+91 9051244326</h1>
              </div>
              <div className="flex flex-wrap techteam font-medium text-lg">
                <h1> Shauryam Dubey : </h1>
                <h1>+91 6203940031</h1>
              </div>
              <div className="flex flex-wrap techteam font-medium text-lg">
                <h1> Soumyaraj Bag : </h1>
                <h1>+91 8337045160</h1>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
