import { Col } from "react-bootstrap";

export const EventCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="event-imgbx">
        <img src={imgUrl} />
        <button className="button">
          <span>Register Now</span>
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
};
