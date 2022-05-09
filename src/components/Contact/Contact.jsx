import { useRef, useState} from 'react'
import "./Contact.scss"
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kydftfh', 'template_lwpdjcg', form.current, 'SXajJkS8da59iSEgh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    setMessage(true)
    e.target.reset()
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={sendEmail} ref={form}>
          <input type="text" placeholder="Subject" name="subject"/>
          <input type="text" placeholder="Name" name="name"/>
          <input type="text" placeholder="Email" name="email"/>
          <textarea placeholder="Message" name="message"></textarea>
          <input type="submit" className="redButton" value="Send" />
           {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
