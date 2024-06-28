import React, { useState } from 'react';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
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
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
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