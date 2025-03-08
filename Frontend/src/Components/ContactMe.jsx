import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Style/Contact.css"; // Ensure this file contains your CSS
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_y1myt8q', 'template_vgcegmq', form.current, 'fPx116jZ5Pssc5Cs_')
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    toast.success('Email successfully sent!');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Failed to send email: ' + error.text);
                },
            );
    };

    return (
        <div className="contact-Main-container">
            <div className="contact-container">
                <h2 className="mb-4">📩 Contact Me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="user_name"
                            required
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            name="user_email"
                            required
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="mb-3">
                        <textarea
                            className="form-control"
                            name="message"
                            rows="4"
                            required
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-submit">
                        Send Message
                    </button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default ContactMe;
