import React from 'react';

export default class ContactForm extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'

        
        return (
            <>
                <section className="contact-page">
                    <div className="contact-page-bg" style={{ backgroundImage: 'url(' + publicUrl + 'assets/images/backgrounds/contact-page-bg.jpg)' }}></div>
                    <div className="container">
                        <div className="row" style={{display:"flex" , flexDirection:"column", alignItems:"center"}}>
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__left">
                                    <div className="section-title text-left">
                                        <span className="section-title__tagline">Contact Us</span>
                                       
                                    </div>
                                    <div className="contact-page__form">
                                        <form action="https://api.web3forms.com/submit" method="POST" className="comment-one__form contact-form-validated">
                                            {/* Web3Forms Access Key */}
                                            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Your name" name="name" required />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="email" placeholder="Email address" name="email" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box text-message-box">
                                                        <textarea name="message" placeholder="Write a message" required></textarea>
                                                    </div>
                                                    <div className="comment-form__btn-box">
                                                        <button type="submit" className="thm-btn comment-form__btn">Send</button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Optional: Add a Honeypot field to prevent spam */}
                                            <input type="hidden" name="subject" value="New Contact Form Submission" />
                                            <input type="text" name="botcheck" className="hidden" style={{ display: 'none' }} />

                                        </form>

                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__right">
                                    <div className="contact-page__img">
                                        <img src={publicUrl + "assets/images/services/download.png"} alt="" />
                                        <div className="contact-page__img-shape">
                                            <img src={publicUrl + "assets/images/shapes/contact-page-img-shape.png"} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}