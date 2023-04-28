import React from 'react';
import "./header.scss";
import axios from "axios";
import { useState } from "react";

const ContactForm = () => {

  const [email, setEmail] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      email,
    };

    const response = await axios.post(
      "http://localhost:5000/api/sendemail",
      data
    );
    console.log(response.data);
  };

    return (
      <div className='contact_form'>
        <form className='"--form-control' onSubmit={sendEmail}>
          <label htmlFor="name">Name:</label>
          <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Enter your name" />
  
          <label htmlFor="email">Email:</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your email address"            
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
  
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
  
          <button 
          className='contact_form_button' 
          type="submit">
          Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;