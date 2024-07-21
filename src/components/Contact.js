import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const formData = new FormData(e.target);
    const firstName = name.split(' ')[0];

    try {
      const response = await fetch('https://formspree.io/f/xblrdlyg', { 
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      if (response.ok) {
        setStatus(`Thank you for your message, ${firstName}! I'll get back to you shortly.`);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('Oops! There was a problem. Please try again later.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-form-container">
          <h2>Get in Touch!</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
        <div className="contact-info">
          <h3>Contact Me</h3>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:nguyenbrandon327@gmail.com">nguyenbrandon327@gmail.com</a>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
              <a href="https://linkedin.com/in/brannguy27">My LinkedIn</a>
            </li>
            <li>
              <i className="fab fa-github"></i>
              <a href="https://github.com/bnguy408">My GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;