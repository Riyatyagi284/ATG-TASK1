import React from 'react'
import Container from 'react-bootstrap/Container';

import { FaArrowLeft } from "react-icons/fa";

import "./compoStyle/Home.css"

const Home = () => {
    return (
        <Container fluid className="home-container" >
            <div className="home-top">
                <div className="home-top-content">
                    <FaArrowLeft className='leftArrow-icon' />
                    <button className="joingroup-btn">Join Group</button>
                </div>
            </div>
            <div className="home-content">
                <p>Computer Engineering</p>
                <p>142,765 Computer Engineers follow this</p>
            </div>
        </Container>
    )
}

export default Home