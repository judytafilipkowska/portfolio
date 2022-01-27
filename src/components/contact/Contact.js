import "./Contact.css"
import LinkedIn from "../../image/linkedIn.png"
import GitHub from "../../image/github.png"
import Mail from "../../image/mail.png"
import Pin from "../../image/pin.png"
import Phone from "../../image/phone.png"
import { useRef } from "react"
import emailjs, { sendForm } from '@emailjs/browser';

function Contact() {
    const formRef = useRef()

    const handleSubmit = (e) => {

        e.preventDefault();
        emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, formRef.current, process.env.USER_ID)
            .then((result) => {
                console.log(result.text);
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
                        <input type="text" placeholder="Your name" name="user_name"></input>
                        <input type="text" placeholder="Subject" name="user_subject"></input>
                        <input type="text" placeholder="Your email address" name="user_email"></input>
                        <textarea rows="5" placeholder="Message..." name="message"></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;