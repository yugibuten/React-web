
import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_img.jpg';

export default function About() {
    // Icons
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

  return (
    <>
    <section id="about">
        <div class="container">
            <div className="title_headling">
                <h3>Welcome To QuanHack</h3>
                <p>We Provides Shortage Remarkable Ideas!</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessIcon}
                    </div>
                    <div className="about_content">
                        <h5>Development</h5>
                        <p>QuanHack is a startup company that specializes in developing software solutions for businesses and individuals.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                        {faChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Integration</h5>
                        <p>Our team is composed of experts in both software development and data integration, allowing us to deliver a seamless user experience for our clients.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        {faTruckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Innovation</h5>
                        <p>Our commitment to innovation, efficiency, and customer satisfaction sets us apart from the rest.</p>
                    </div>
                </div>
            </div>

            
        </div>
    </section>
    </>
  )
}
