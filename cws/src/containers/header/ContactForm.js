import React from 'react';
import "./header.scss";

const ContactForm = () => {
//get the form by its id
const form = document.getElementById("contact-form"); 

//1.
const formEvent = form.addEventListener("submit", (event) => {
  event.preventDefault();

  //2.
  let mail = new FormData(form);

  //3.
  sendMail(mail);
})

const sendMail = (mail) => {
    //1.
    fetch("/send", {
      method: "post", //2.
      body: mail, //3.
  
    }).then((response) => {
      return response.json();
    });
  };

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
  
          <button className='contact_form_button' type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;