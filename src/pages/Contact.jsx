import { useRef, useState } from "react";
import "../style/contact.css";
import { motion } from "framer-motion";
import {  FaLocationArrow, FaPhone, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailJs from "@emailjs/browser";
import Success from "../components/modals/Success"; 
import useOnlineStatus from "../hooks/useOnlineStatus";

const Contact = () => {

    const formRef = useRef(null);

    const initializer = { isVisible: false, isSuccessful: false, title: "", message: "", color: "", bgColor: "" };
    const [mailAlert, setMailAlert] = useState(initializer);
    const [error, setError] = useState(null);

    const isOnline = useOnlineStatus();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError(null);
        try {
            const response = await emailJs.sendForm(serviceId, templateId, formRef.current, publicKey);
            console.log(response);
        } catch (error) {
            setError(error.text);
            console.log(error);
            setMailAlert({
                isVisible: true,
                isSuccessful: false,
                title: "Error",
                message: "Oops, something went wrong, please try again.",
                color: "red",
                bgColor: "red"
            });
        }

        if (!error && isOnline) {
            setMailAlert({
                isVisible: true,
                isSuccessful: true,
                title: "Thank You!",
                message: "Your details has been successfully sent!",
                color: "var(--text-primary)",
                bgColor: "#2dd4bf"
            });
            formRef.current.reset();
        }

    }

    return (
        <>
            {mailAlert.isVisible &&
                <Success mailAlert={mailAlert} setMailAlert={setMailAlert} />
            }
            <motion.main
                animate={{ scale: 1, opacity: 1, y: 0 }}
                initial={{ scale: 0, opacity: 0, y: 300 }}
                transition={{ duration: 1 }}
                style={{paddingLeft:0, paddingRight:0}}
                className="contact-page"
            >
                <div className="contact-me">
                    <div className="contact-form">
                        <h1>Get in touch</h1>
                        <form onSubmit={handleSubmit} ref={formRef}>
                            <div className="group">
                                <input type="text" name="from_name" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Name</label>
                            </div>

                            <div className="group">
                                <input type="email" name="from_email" required />
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>Email</label>
                            </div>

                            <div className="group">
                                <textarea name="message" required ></textarea>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label>message</label>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h1>Contact me</h1>
                        <div className="alt-contact">
                            <div className="contact-icon">
                                <FaLocationArrow style={{ fontSize: "22px", zIndex: "99999" }} />
                            </div>
                            <p> <strong>Address:</strong>  Lagos, Nigeria. </p>
                        </div>
                        <div className="alt-contact">
                            <div className="contact-icon">
                                <FaPhone style={{ fontSize: "22px" }} />
                            </div>
                            <p> <strong>Phone:</strong> +2348165960182 </p>
                        </div>
                        <div className="alt-contact">
                            <div className="contact-icon">
                                <SiGmail style={{ fontSize: "22px" }} />
                            </div>
                            <p> <strong>Email:</strong> mosesgeorge323287@gmail.com </p>
                        </div>
                        <div className="alt-contact">
                            <div className="contact-icon">
                                <FaWhatsapp style={{ fontSize: "22px" }} />
                            </div>
                            <p> <strong>Chat:</strong>  08165960182 </p>
                        </div>
                    </div>
                </div>
            </motion.main>
        </>
    )
}

export default Contact;