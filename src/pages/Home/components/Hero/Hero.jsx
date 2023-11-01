import React from 'react';
import "./hero.scss";
import { useNavigate } from 'react-router-dom';
const Hero = () => {
    const navigate = useNavigate()
    return (
        <div data-aos="zoom-in" className="hero page-container mb-4">
            <div className="hero-content">
                <h1 data-aos="fade-up"><br /> <br /> </h1>
                {/* <button data-aos="fade-up" onClick={() => navigate("/shop")} className='general-button mt-4'></button> */}
            </div>
        </div>
    )
}

export default Hero;