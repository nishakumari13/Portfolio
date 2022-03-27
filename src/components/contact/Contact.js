import React from "react";
import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact_container">
        <div className="contact_options">
          {/* <article className="contact_option">
            <HiOutlineMail className="contact_icon" />
            <h4>Email</h4>
            <h5>dummyemail@gmail.com</h5>
            <a href="mailto:nisha1310kumari@gmail.com" target="_blank">
              Send a message
            </a>
          </article> */}
          <article className="contact_option">
            <HiOutlineMail className="contact_icon" />
            <h4>Whatsapp</h4>
            <h5>+123456788</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+917209244126"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Enter your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Write your message"
            required
          ></textarea>

          {/* <button type="submit" className="btn btn-primary"> */}
          <a
            href="mailto:nishu13nisi@gmail.com"
            target="_blank"
            className="btn btn-primary"
          >
            Send Message
          </a>
          {/* </button> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
