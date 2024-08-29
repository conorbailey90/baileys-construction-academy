import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, phone, message
}) => (
  <div>
    <h1>Hi</h1>
    <p>The following message has been received from {name}.</p>

    <h2>Message</h2>

    <p>{message}</p>

    <h2>Contact Details</h2>

    <p>E-Mail: {email}</p>
    <p>Phone: {phone}</p>
  </div>
);