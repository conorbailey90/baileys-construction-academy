// components/ContactForm.js
'use client'

// e89ed448b59bb1db5455030edb203487-777a617d-b81f1093
import { useState } from 'react';

export default function ContactForm() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle input changes
  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    // Clear previous messages
    setError('');
    setSuccess('');

    // Validate inputs (example: basic validation)
    if (!formData.name || !formData.telephone || !formData.email || !formData.message) {
      setError('All fields are required');
      return;
    }

    try {
      // Send data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Message sent successfully!');
        setFormData({
          name: '',
          telephone: '',
          email: '',
          message: ''
        });
      } else {
        setError(result.message || 'Something went wrong!');
      }
    } catch (error) {
      setError('Failed to send message!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Telephone:</label>
        <input
          type="tel"
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <button type="submit">Send</button>
    </form>
  );
}
