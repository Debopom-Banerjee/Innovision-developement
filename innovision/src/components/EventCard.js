import { useContext, useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { UserContext } from "../context/User.context";
import { signInWithGoogleRedirect, isUserRegistered } from "../config/firebase";
import Modal from "./Modal";
import ModalRules from "./ModalRules";
import ModalResults from "./ModalResults";

export const EventCard = ({
  index,
  title,
  description,
  info,
  imgUrl,
  rules,
  theme,
  note,
  coordinators,
  hasForm,
  winning,
}) => {
  const { currUser } = useContext(UserContext);

  const [modalState1, setModalState1] = useState(false);
  const [modalRules, setModalRules] = useState(false);
  const [modalResults, setModalResults] = useState(false);

  const handleGoogleSignin = async () => {
    try {
      await signInWithGoogleRedirect();
    } catch (error) {
      console.log(error);
    }
  };

  const [isRegistered, setIsRegistered] = useState(false);

  const openResults = () => {
    setModalResults(true);
  };
  const OpenModal = () => {
    setModalState1(true);
  };
  const openRules = () => {
    setModalRules(true);
  };
  const newTitle = title.replace(/ /g, "").toLowerCase();
  useEffect(() => {
    const checkRegistration = async (currUser, newTitle) => {
      const value = await isUserRegistered(currUser, newTitle);
      if (value) {
        setIsRegistered(true);
      }
    };
    checkRegistration(currUser, newTitle);
    console.log(title);
  }, [title, currUser]);

  const ClosedEvents = [
    "BGMI",
    "Valorant",
    "Codathon",
    "Tech C",
    "Webify",
    "QuizTime",
    "CTF",
    "Spell Bee",
    "Quiz Time",
    "Reel Lens",
    "Wall (Artwork)",
    "Wall (Article)",
    "Wall (Poetry)",
    "Extempore",
    "Shutterbugs",
  ];

  return (
    <Col size={12} sm={6} md={4}>
      <div className="event-imgbx">
        <img src={imgUrl} alt="img" />
        {ClosedEvents.includes(title) ? (
          <button
            className="button !top-5/6 z-10 !cursor-pointer"
            onClick={openResults}
          >
            <span className=" font-semibold !cursor-pointer">Results</span>
          </button>
        ) : !currUser ? (
          <button className="button" onClick={handleGoogleSignin}>
            <span className=" font-semibold">Sign In / Sign Up</span>
          </button>
        ) : (
          <button className="button" onClick={OpenModal}>
            {isRegistered ? (
              <span className=" font-semibold">Edit Form</span>
            ) : (
              <span className=" font-semibold">Register Now</span>
            )}
          </button>
        )}
        <button
          className="button !top-2/3 z-10 !cursor-pointer"
          onClick={openRules}
        >
          <span className=" font-semibold !cursor-pointer">Guidelines</span>
        </button>

        <ModalRules
          modalRules={modalRules}
          setModalRules={setModalRules}
          title={title}
          info={info}
          rules={rules}
          theme={theme}
          note={note}
          coordinators={coordinators}
        />
        <Modal
          modalState1={modalState1}
          setModalState1={setModalState1}
          title={title}
          hasForm={hasForm}
        />

        <ModalResults
          key={index}
          modalResults={modalResults}
          setModalResults={setModalResults}
          result={winning}
          title={title}
        />

        <div className="event-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
