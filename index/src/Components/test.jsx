import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { query } from 'firebase/firestore';


function Test() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
 
    emailjs.sendForm("service_3las473", 'template_ycnsg3a', form.current, '4zdDju3MwnJ0FmfD1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
        

export default Test;