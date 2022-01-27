import "./Contact.css"
import LinkedIn from "../../image/linkedIn.png"
import GitHub from "../../image/github.png"
import Mail from "../../image/mail.png"
import Pin from "../../image/pin.png"
import Phone from "../../image/phone.png"
import { useEffect, useRef, useState } from "react"
import emailjs, { sendForm } from '@emailjs/browser';

function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userSubject, setUserSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleUserName = (e) => setUserName(e.target.value);
    const handleUserSubject = (e) => setUserSubject(e.target.value);
    const handleUserEmail = (e) => setUserEmail(e.target.value);
    const handleMessage = (e) => setMessage(e.target.value)

    const handleSubmit = (e) => {

        e.preventDefault();
        emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, formRef.current, `${process.env.REACT_APP_USER_ID}`)
            .then((result) => {
                console.log(result.text);
                setDone(true);
                setUserName("");
                setUserEmail("");
                setUserSubject("");
                setMessage("");
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className="contact">
            <div className="contact-background"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h2 className="contact-text">Links and contact</h2>
                    <div className="contact-info">
                        <a href="https://www.linkedin.com/in/judyta-filipkowska/">
                            <div className="contact-item">
                                <img src={LinkedIn} alt="" className="contact-image" />
                                <h6>Let's connect!</h6>
                            </div>
                        </a>
                        <a href="https://github.com/judytafilipkowska">
                            <div className="contact-item">
                                <img src={GitHub} alt="" className="contact-image" />
                                <h6>Check my code</h6>
                            </div>
                        </a>
                        <div className="contact-item">
                            <img src={Mail} alt="" className="contact-image" />
                            <h6>judytafilipkowska@gmail.com</h6>
                        </div>
                        <div className="contact-item">
                            <img src={Phone} alt="" className="contact-image" />
                            <h6>+351 937175471 / +48 663543135</h6>
                        </div>
                        <div className="contact-item">
                            <img src={Pin} alt="" className="contact-image" />
                            <h6>Lisbon, Portugal</h6>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-mail-text">
                        <b>Get in touch!</b> You can send me a  message here:
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Your name" name="user_name" value={userName} onChange={handleUserName}></input>
                        <input type="text" placeholder="Subject" name="user_subject" value={userSubject} onChange={handleUserSubject}></input>
                        <input type="text" placeholder="Your email address" name="user_email" value={userEmail} onChange={handleUserEmail}></input>
                        <textarea rows="5" placeholder="Message..." name="message" value={message} onChange={handleMessage}></textarea>
                        <button type="submit">Send</button>
                        {done && <p className="send-message">I will get back to you soon!</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;