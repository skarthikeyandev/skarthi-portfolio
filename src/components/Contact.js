import React, { useEffect } from 'react';
import { contactSection } from '../portfolio';

// import emailjs from '@emailjs/browser';
const Contact = () => {
    useEffect(() => {
        document.title = "Contact"
    }, []);
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_bvpri8v', 'template_8si3ac9', form.current, 'XpERaHrVJSmqNepkn')
    //         .then((result) => {
    //             console.log(result.text);
    //             alert("message sent");
    //         }, (error) => {
    //             console.log(error.text);
    //         });

    //         e.target.reset();
    // };
    const AboutItems = ({ item, i }) => {
        return (
            <div className="contact" key={i} >
                <i className={item.className}></i>
                <span className="card-title">{item.name}</span>
                <span className="card-info">{item.url}</span>
            </div>
        )
    }

    return (
        <section className="contact-container">
            <div className="container">
                <div className="one">
                    <span className="heading">{contactSection.contactheading}</span>
                </div>
                <p>{contactSection.contactpara}</p>
                <div className="about-contents">
                    <div className="about-one">
                        {contactSection.contactbox.map((item, i) => {
                            return <AboutItems key={i} item={item} />;
                        })}
                    </div>
                    <div className="about-two">
                        <div className="contact-form">
                            <form id="contact-form" >
                                <div className="single-form">
                                    <input type="text" name="name" placeholder="Name" />
                                </div>
                                <div className="single-form">
                                    <input type="text" name="email" placeholder="Email" className="" />
                                </div>
                                <div className="single-form">
                                    <textarea name="message" placeholder="Message" className=""></textarea>
                                </div>
                                <div className="single-form">
                                    <button className="main-btn" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className="location-map">
                            <iframe
                                src={contactSection.mapaddress}
                                width="100%" height="250px"
                                loading="lazy" title='map' style={{ border: 0 }}></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact