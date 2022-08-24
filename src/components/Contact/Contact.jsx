import { useRef, useState } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import rocket from "../../assets/rocket.svg";
import { motion } from "framer-motion";
import Rocket from "../Rocket/Rocket";

export default function Contact() {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kydftfh",
        "template_lwpdjcg",
        form.current,
        "SXajJkS8da59iSEgh"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessage(true);
    e.target.reset();
  };
  return (
    <div className="contact" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="left"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img className="rocket" src={rocket} alt="" />
        {/* <Rocket /> */}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="right"
      >
        <h2>Contact.</h2>
        <form onSubmit={sendEmail} ref={form}>
          <input type="text" placeholder="Subject" name="subject" required />
          <input type="text" placeholder="Name" name="name" required />
          <input type="text" placeholder="Email" name="email" required />
          <textarea placeholder="Message" name="message" required></textarea>
          <input type="submit" className="redButton" value="Send" />
          {message && <p>Thanks, I'll reply ASAP :)</p>}
        </form>
      </motion.div>
    </div>
  );
}
