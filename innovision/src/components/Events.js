import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/logo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import art_wall from "../assets/img/art_wall.jpeg";
import article from "../assets/img/article_wall.jpeg";
import poetry from "../assets/img/poetry_wall.jpeg";
import shutterbugs from "../assets/img/shutterbugs.jpeg";
import extempore from "../assets/img/extempore.png";
import reel from "../assets/img/reel.png";
import quiz from "../assets/img/Quiz.png";
import codathon from "../assets/img/codathon.png";
import techC from "../assets/img/techC.png";
import webify from "../assets/img/webify.png";
import ctf from "../assets/img/ctf.png";
import hackathon from "../assets/img/hackathon.png";
import bgmi from "../assets/img/bgmi.png";
import valorant from "../assets/img/valo.png";
import Spell_Bee from "../assets/img/Spell_Bee.jpg";
import TrackVisibility from 'react-on-screen';
import { EventCard } from "./EventCard";


export const Events = () => {

    const TechEvents = [
        {
            title: "Tech C",
            description: "Sept 7-8",
            imgUrl: techC,
            isGroupEvent: false,
            collection: "TechC"
        },
        {
            title: "Codathon",
            description: "Sept 7-8",
            imgUrl: codathon,
            isGroupEvent: false,
            collection: "Codathon"
        },
        {
            title: "Webify",
            description: "Sept 7-8",
            imgUrl: webify,
            isGroupEvent: false,
            collection: "Webify"
        },
        {
            title: "CTF",
            description: "Sept 7-8",
            imgUrl: ctf,
            isGroupEvent: false,
            collection: "ctf"
        },
        {
            title: "Hackathon",
            description: "Sept 7-8",
            imgUrl: hackathon,
            isGroupEvent: true,
            collection: "hackathon"
        },
        {
            title: "BGMI",
            description: "Sept 7-8",
            imgUrl: bgmi,
            isGroupEvent: true,
            collection: "bgmi"
        },
        {
            title: "Valorant",
            description: "Sept 7-8",
            imgUrl: valorant,
            isGroupEvent: true,
            collection: "valorant"
        },
    ];
    const NontechEvents = [
        {
            title: "Artwork",
            description: "Sept 7-8",
            imgUrl: art_wall,
            isGroupEvent: false,
            collection: "TheWall"
        },
        {
            title: "Article",
            description: "Sept 7-8",
            imgUrl: article,
            isGroupEvent: false,
            collection: "Article"
        },
        {
            title: "Poetry",
            description: "Sept 7-8",
            imgUrl: poetry,
            isGroupEvent: false,
            collection: "Poetry"
        },
        {
            title: "Shutterbugs",
            description: "Sept 7-8",
            imgUrl: shutterbugs,
            isGroupEvent: false,
            collection: "ShutterBug"
        },
        {
            title: "Extempore",
            description: "Sept 7-8",
            imgUrl: extempore,
            isGroupEvent: false,
            collection: "Extempore",
        },
        {
            title: "QuizTime",
            description: "Sept 7-8",
            imgUrl: quiz,
            isGroupEvent: true,
            collection: "quiz"
        },

        {
            title: "ReelLens",
            description: "Sept 7-8",
            imgUrl: reel,
            isGroupEvent: false,
            collection: "ReelLens"
        },
        {
            title: "Spell Bee",
            description: "Sept 7-8",
            imgUrl: Spell_Bee,
            isGroupEvent: false,
            collection: "Spellbee"
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