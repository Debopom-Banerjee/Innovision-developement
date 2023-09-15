import { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import { UserContext } from "../context/User.context";
import { signInWithGoogleRedirect } from "../config/firebase";
import Modal from "./Modal";

export const EventCard = ({ title, description, imgUrl }) => {
<<<<<<< HEAD
  return (
    <Col size={12} sm={6} md={4}>
      <div className="event-imgbx">
        <img src={imgUrl} />
        <button className="button">
          <a href="#forms">
            <span>Register Now</span>
          </a>
        </button>
        {/* <button className="button2">
          <span>Guidelines</span>
        </button> */}
        <div className="event-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
=======

    const { currUser, modalState, setModalState } = useContext(UserContext);
    // const { modalState, setModalState } = useContext(UserContext);

    const handleGoogleSignin = async () => {
        try {
            await signInWithGoogleRedirect();
        } catch (error) {
            console.log(error);
        }
    };

    // const [modalState, setModalState] = useState(false)

    const OpenModal = () => {
        console.log(modalState)
        setModalState(true)
    }

    return (
        <Col size={12} sm={6} md={4}>
            <div className="event-imgbx">
                <img src={imgUrl} />
                {
                    !currUser ? (
                        <button className="button" onClick={handleGoogleSignin}>
                            <span className=" font-semibold">Sign In / Sign Up</span>
                        </button>
                    ) : (
                        <button className="button" onClick={OpenModal}>
                            <span className=" font-semibold">Register Now</span>
                            {/* <Modal modalState={modalState} /> */}
                        </button>

                    )
                }
                <Modal />
                <div className="event-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
>>>>>>> 57d21537b8ae7cdb130e276a7b20f282f3ab535e
};
