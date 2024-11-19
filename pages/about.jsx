import React from "react"
import AboutImage from '../assets/images/aboutPage.jpg'

export default function Aboutn(){
    return (
        <div className="aboutPage">
            <img className="aboutImage" src={AboutImage} alt="" />
            <div className="aboutPage-text-container">
                <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.(Hitch costs extra 😉). <br /><br />Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                <div className="aboutPage-catalog-container">
                    <h1>Your destination is waiting.<br />
                    Your van is ready.</h1>
                    <button className="link-button black">Explore our vans</button>
            </div>
            </div>
        </div>
    )
}