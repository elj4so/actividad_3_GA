import React, { useState } from 'react';
import { event } from '../analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    event('Contact', 'Field Change', name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    event('Contact', 'Form Submit', 'Contact Form', 1);
    alert('Formulario enviado (simulación)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleFormAbandon = () => {
    event('Contact', 'Form Abandon', 'Contact Form');
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit} onBlur={handleFormAbandon}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;