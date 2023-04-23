import React from 'react';
import "./header.scss";


const ContactForm = () => {
    return (
      <div className='contact_form'>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
  
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" />
  
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" placeholder="Enter the subject of your message" />
  
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
  
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;