import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactPicture from "../../assets/contact_pic.png";
import programming from "../../assets/programming.png";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phone, message } = formDetails;

    const subject = "Contact Form Submission";
    const body = ` I am ${firstName} ${lastName}`;
    const mailtoLink = `mailto:ifennawisdom@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img className="contact-img" src={programming} alt="contact me" />
          </Col>

          <Col md={6}>
            <h2>Get In Touch</h2>

            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>

                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                <Col>
                  <textarea
                    placeholder="Message"
                    rows="6"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>

                  <button type="submit">
                    <span>Send</span>
                  </button>
                </Col>

                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
