import React from 'react';
import { Link } from 'react-router-dom';

export default class RecentEventsThree extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="recent-event">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Defining Chapters                         </span>
                            <h2 className="section-title__title">Stories of Impact & Change</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/resources/event1.JPG"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                                <p> <span className="icon-calendar1"></span> 25 Mar 2022</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>COVID-19 Response & Online Mental Health Events</Link></h3>
                                        <p className="recent-event__text1">TDuring the COVID-19 pandemic, TGTF donated ₹30,000 worth of masks and sanitizers to frontline workers
                                            Conducted multiple online mental health workshops to support individuals facing emotional distress during the crisis
                                            .</p>
                                    </div>
                                </div>
                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/resources/event2.JPG"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                                <p> <span className="icon-calendar1"></span> 25 Mar 2022</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>Project TGTF Vidya (Education for All)</Link></h3>
                                        <p className="recent-event__text1">Launched in 2024 at Khushbow Vidya Niketan School, Hyderabad
                                            Scholarship support of ₹60,000 allocated for underprivileged students
                                            Workshops on leadership, art, and life skills conducted by industry experts
                                        </p>
                                    </div>
                                </div>
                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/resources/event2.JPG"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                                <p> <span className="icon-calendar1"></span> 25 Mar 2022</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>Art-Based Initiative: “Taare Zameen Par”</Link></h3>
                                        <p className="recent-event__text1">A storytelling event focused on childhood creativity
                                            Encouraged self-expression through painting, drawing, & performing arts
                                        </p>

                                    </div>
                                </div>
                            </div>



                            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/resources/event2.JPG"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                                <p> <span className="icon-calendar1"></span> 25 Mar 2022</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>Corporate Mental Wellness at Salesforce (2024)</Link></h3>
                                        <p className="recent-event__text1">Workshop on Suicide Prevention & Resilience
                                            Focused on mental toughness, music & art therapy, and emotional well-being.
                                        </p>
                                    </div>
                                </div>
                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/resources/event2.JPG"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                                <p> <span className="icon-calendar1"></span> 25 Mar 2022</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>Nostalgia - The Chronicles of Elderly Tales (2024)</Link></h3>
                                        <p className="recent-event__text1">Senior citizen storytelling event at PP Reddy Retirement Homes, Hyderabad
                                            Engaged elders in interactive storytelling, music therapy & art expression
                                        </p>
                                    </div>
                                </div>
                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/resources/event2.JPG"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                                <p> <span className="icon-calendar1"></span> 25 Mar 2022</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>2024 Goa International Purple Fest – Volunteer Partner</Link></h3>
                                        <p className="recent-event__text1">TGTF served as a volunteer training partner, training and leading 1,200 volunteers
                                            Provided sensitization and inclusivity training to ensure an accessible and welcoming event experience
                                        </p>

                                    </div>
                                </div>
                            </div>






                        </div>
                    </div>









                    <div className="container">
                        
                        <div className="row">
                        <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                                
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/resources/event1.JPG"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                                <p> <span className="icon-calendar1"></span> 25 Mar 2022</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>StudentPreneur Confluence (Entrepreneurship Event, 2024)</Link></h3>
                                        <p className="recent-event__text1">Held at Bharatiya Vidya Bhavan’s Public School, Jubilee Hills
                                            Encouraged students to explore business ideas focused on accessibility & assistive tech

                                        </p>
                                    </div>
                                </div>
                               
                                
                                
                            </div> 


                            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/resources/event2.JPG"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                                <p> <span className="icon-calendar1"></span> 25 Mar 2022</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>Purple Jallosh 2025: Knowledge Partner for Purple Solvathon</Link></h3>
                                        <p className="recent-event__text1">TGTF partnered with Purple Jallosh 2025, serving as the Knowledge Partner for Purple Solvathon
                                            Hosted workshops, panel discussions, and engagement programs focused on innovation & accessibility solutions for disability inclusion

                                        </p>
                                    </div>
                                </div>                                {/* Recent Event Single */}
                                
                            </div>






                        </div>
                    </div>












                </section>
            </>
        )
    }
}




































