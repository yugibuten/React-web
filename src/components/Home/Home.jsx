
import React from 'react';
import './Home.css';
import BannerImage from '../../assets/banner/banner-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    // Icons
    const faChartIcon = <FontAwesomeIcon icon={faChartLine} />
    const faShieldIcon = <FontAwesomeIcon icon={faShieldHalved} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

  return (
    <>
    <section id="home">
        <div className="banner_image"></div>
        <div className="container">
            <div className="banner_outer">
                <div className="col">
                    <h2 className="title">
                        Bringing Innovation to Software Solutions
                    </h2>
                    <p>QuanHack Solutions: Bringing Innovation to Software Development. Our expert team harnesses cutting-edge technology to create dynamic and efficient software solutions for your business</p>
                    <div className="btn_wrapper">
                        <a className="btn" href="/">Get Started</a>
                    </div>
                </div>
                <div className="col">
                    <div className="sub_banner_image">
                        <img src={BannerImage} alt="Banner_image" />
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
