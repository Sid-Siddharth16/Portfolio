import React from "react";
import "./Contact.css";

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8ae5168e-8e1d-4f23-8353-144b1d53edb7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };



  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Hey! Let's talk.....
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <h4>Email</h4>
              <p>siddharthpandeyhoneypandey@gmail.com</p>
            </div>
            <div className="contact-detail">
              <h4>Mob-no.</h4>
              <p>+91-9129358930</p>
            </div>
            <div className="contact-detail">
              <h4>Address</h4>
              <p>Kanpur, Uttar Pradesh, INDIA</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" placeholder="Enter your Email" />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
