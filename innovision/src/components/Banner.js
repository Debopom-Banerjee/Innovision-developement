import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo2 from "../assets/img/logo2.png";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
//import 'animate.css';
import TrackVisibility from "react-on-screen";
import { signInWithGoogleRedirect } from "../config/firebase";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Annual Departmental Fest of CSE"];
  const period = 4000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await signInWithGoogleRedirect();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">INNOVISION 2023</span>
                  <h2>
                    {`Presenting our`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="2000"
                      data-rotate='[ "Annual Departmental Fest of CSE" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>

                  <button onClick={handleGoogleSignin}>
                    Register Now <ArrowRightCircle size={27} />
                  </button>
                  <span>
                    <a href="https://www.rcciit.org/">
                      <img src={logo2} alt="RCCIIT" />
                    </a>
                  </span>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img className="img" src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
