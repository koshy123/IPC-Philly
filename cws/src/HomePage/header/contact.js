import React, { useState } from 'react';
import axios from 'axios';
import './header.scss';




const handleFormSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: name,
    email: email,
    subject: subject,
    message: message
  };

  try {
    const response = await axios.post('https://ipc-backend.herokuapp.com/', formData);
    console.log(response.data); // Success response
    // Reset the form or show a success message
  } catch (error) {
    console.log(error.response.data); // Error response
    // Show an error message to the user
  }
};



const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    const data = { email };
    const response = await axios.post('https://ipc-backend.herokuapp.com/', data);
    console.log(response.data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact_form">
        <p>Thank you for your submission. Someone will get back to you shortly. God bless!</p>
      </div>
    );
  }

  return (
    <div className="contact_form">
      <form className="--form-control" onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Enter your message"></textarea>

        <button className="contact_form_button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
