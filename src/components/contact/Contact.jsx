import React from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const [processingEmail, setProcessingEmail] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDone(false);
        setProcessingEmail(true);
        emailjs.sendForm(
            'service_yuujr2r', 'template_5obkrch', formRef.current, '1bop2f0AT_AvqC1mp'
        ).then((result) => {
            console.log(result.text);
            setDone(true);
            setProcessingEmail(false);
        }, (error) => {
            console.log(error.text);
            setProcessingEmail(false);
        });
    }
  return (
    <div className="c block">
        <div className="c-bg">

        </div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                    Let's discuss your project
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +1 1234 567 89
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        contact@test.dev
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        256 ...
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>What's your story?</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis placeat quidem aut officiis illo maiores ex cum a molestias, sapiente saepe eius deserunt possimus repudiandae fugiat dolorem molestiae velit magnam.
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name" name="user_name"/>
                    <input type="text" placeholder="Subject" name="user_subject"/>
                    <input type="text" placeholder="Email" name="user_email"/>
                    <textarea rows="5" placeholder="Message" name="message" />
                    <button disabled={processingEmail}>Submit</button>
                    {done && "Thank you..."}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact