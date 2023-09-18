import { useState, useEffect, useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import logo2 from "../assets/img/logo2.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { BrowserRouter as Router } from "react-router-dom";
import { UserContext } from "../context/User.context";
import { signOutUser } from "../config/firebase";
import { signInWithGoogleRedirect } from "../config/firebase";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    const { currUser } = useContext(UserContext);
    // console.log(currUser);
    // console.log("profile email is", currUser.email);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    const signOutHandler = async () => {
        await signOutUser();
    };

    const handleGoogleSignin = async () => {
        try {
            await signInWithGoogleRedirect();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="https://www.rcciit.org/" className="!min-w-[130px]">
                        <img src={logo2} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link
                                href="#home"
                                className={
                                    activeLink === "home" ? "active navbar-link" : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("home")}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                href="#events"
                                className={
                                    activeLink === "events" ? "active navbar-link" : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("events")}
                            >
                                Events
                            </Nav.Link>
                            <Nav.Link
                                href="#gallery"
                                className={
                                    activeLink === "gallery"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("gallery")}
                            >
                                Gallery
                            </Nav.Link>
                            <Nav.Link
                                href="#results"
                                className={
                                    activeLink === "results"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("results")}
                            >
                                Results
                            </Nav.Link>
                            <Nav.Link
                                href="#contact"
                                className={
                                    activeLink === "contact"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("contact")}
                            >
                                Contact Us
                            </Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                            <div className="social-icon">
                                <a href="https://discord.gg/7w2JQEN4">
                                    <img src={navIcon1} alt="Discord" />
                                </a>
                                <a href="https://www.facebook.com/innovisionrcc/">
                                    <img src={navIcon2} alt="Facebook" />
                                </a>
                                <a href="https://www.instagram.com/innovisionrcc/ ">
                                    <img src={navIcon3} alt="Instagram" />
                                </a>
                            </div>
                            {!currUser ? (
                                <button className="vvd" onClick={handleGoogleSignin}>
                                    <span>Sign In / Sign Up</span>
                                </button>
                            ) : (
                                <div className="flex flex-row justify-around items-center">
                                    <button onClick={signOutHandler}>
                                        <span>Sign Out</span>
                                    </button>
                                    <img src={`${currUser.photoURL}`} className="profile-pic" />
                                </div>
                            )}
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
};
