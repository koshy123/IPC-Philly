import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await axios.post('http://localhost:5000/api/sendemail', {
        name,
        email,
        message,
      });
      setSent(true);
    } catch (error) {
      setError('Failed to send email. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div>
      {sent ? (
        <h2>Email Sent Successfully!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNameChange} required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} required />
          </label>
          <label>
            Message:
            <textarea value={message} onChange={handleMessageChange} required />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Email'}
          </button>
          {error && <p>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
