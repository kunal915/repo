import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ananta Khurana </span>
            from <span className="purple"> pilakhua, India.</span>
            <br />
            I have cultivated a strong passion for programming and continuously
            strive to expand my expertise. With proficiency in core languages
            such as C++, JavaScript, and Go, I’m confident in my ability to
            tackle diverse technical challenges.
            <br />
            <br />
            I am particularly interested in creating cutting-edge web
            technologies and products, with a growing focus on blockchain and
            its transformative potential. My enthusiasm for innovation extends
            beyond the basics, driving me to explore and implement emerging
            trends in these fields.
            <br />
            <br />
            In addition, I actively pursue opportunities to develop and refine
            products using Node.js, along with modern JavaScript libraries and
            frameworks like React.js and Next.js. My goal is to build scalable,
            high-performance applications that push the boundaries of what’s
            possible on the web.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> UI Designing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            I’m passionate about building new web technologies and products,
            especially in areas like blockchain, where I see a lot of potential
            for innovation.
          </p>
          <footer className="blockquote-footer">Ananta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
