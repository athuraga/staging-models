import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/wbr12.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              VISION <span className="purple">  </span> 
            </h1>
            <p className="home-about-body">
             We're Changing the 
              <br />Way the World Thinks 
              <br />About Transportation
              <i>
                <b className="purple">  </b>
              </i>
              <br />
              <br />
             I'm a paragraph. &nbsp;
              <i>
                <b className="purple">Click here to add your own text </b> and
              edit me.{" "}
                <b className="purple">
                 It's easy. Just click "Edit me" or double click me 
                </b>
              </i>
              <br />
              <br />
........                <b className="purple">to add your own content</b> and
              <i>
                <b className="purple">
                  {" "}
make changes to the font.T' m a great place for you to tell a story
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> and let your users know a little more about you</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Services</h1>
            <p>
             We Deliver Exceptional Products<span className="purple"> and  </span>Services Around the World
            </p>
            {/* <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/skoter4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/skoter4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/skoter4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/skoter4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
