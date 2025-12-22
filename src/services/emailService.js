import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
// Replace these with your actual EmailJS credentials
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

// Initialize EmailJS with your public key
emailjs.init(PUBLIC_KEY);

export const sendEmail = async (formData) => {
  console.log('Sending email with data:', formData);
  console.log('Using service ID:', SERVICE_ID);
  
  try {
    const templateParams = {
      to_email: 'shenalpresanka99@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_name: 'Shenal',
      reply_to: formData.email
    };

    console.log('Template params:', templateParams);
    
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );
    
    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Failed to send email. Full error:', {
      error,
      message: error.message,
      status: error.status,
      text: error.text,
      response: error.response
    });
    throw new Error('Failed to send email. Please check console for details.');
  }
};
