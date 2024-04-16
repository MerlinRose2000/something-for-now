import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Submitbutton from "../submitbutton/Submitbutton";
import { useState } from "react";
//import emailjs from "emailjs-com";
//import "../contact/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = () => {
    const messageToSend = `Hello, contributor! I'm ${name}, and I'd like to talk to you about ${subject}. ${message} and my email is ${email}.`;
    const recipient = "Emilia" && "Karen";

    // Logic to send the message
    // emailjs
    //   .send(
    //     "YOUR_SERVICE_ID",
    //     "YOUR_TEMPLATE_ID",
    //     {
    //       message: messageToSend,
    //       to_name: recipient,
    //     },
    //     "YOUR_USER_ID"
    //   )
    //   .then(
    //     (response) => {
    //       console.log("SUCCESS!", response.status, response.text);
    //       alert("Message sent!");
    //     },
    //     (err) => {
    //       console.log("FAILED...", err);
    //       alert("Failed to send message.");
    //     }
    //   );
    // This is just a placeholder. You'll need to replace this with your actual message-sending logic.
    console.log(`Sending message: "${messageToSend}" to ${recipient}`);

    // After sending the message, you might want to give some feedback to the user
    alert("Message sent!");
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6} className="mb-5">
          <Row className="">
            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <input
                type="text"
                placeholder="Name"
                className="name-contact"
                style={{ width: "100%" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="mb-3">
              <input
                type="email"
                placeholder="email"
                className="email-contact"
                style={{ width: "100%" }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} sm={12} md={12} lg={12}>
              <input
                type="text"
                placeholder="Subject"
                className="subject-contact"
                style={{ width: "100%" }}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              ></input>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={12} sm={12} md={12} lg={12}>
              <input
                type="textarea"
                placeholder="Message"
                className="message-contact"
                style={{ width: "100%" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></input>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <Submitbutton text="Send" onClick={handleClick} />
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} className="mb-5">
          <img src="" alt="I will be an Image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
