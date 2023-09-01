import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/logo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { EventCard } from "./EventCard";

export const Events = () => {

    const TechEvents = [
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
    ];
    const NontechEvents = [
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
        {
            title: "Innovion 2023",
            description: "Sept 7-8",
            imgUrl: projImg1,
        },
    ];

    return (
        <section className="events" id="events">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>EVENTS</h2>
                                    <p>Click on any event from technical as well as non-technical domains and register for fun and thrill. Best of Luck!! </p>
                                    <Tab.Container id="event-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Technical</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Non-Technical</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        TechEvents.map((event, index) => {
                                                            return (
                                                                <EventCard
                                                                    key={index}
                                                                    {...event}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        NontechEvents.map((event, index) => {
                                                            return (
                                                                <EventCard
                                                                    key={index}
                                                                    {...event}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}