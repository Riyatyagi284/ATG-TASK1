import React from 'react'
import "./compoStyle/Header.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { IoMdSearch } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import logo from "../assets/atg-logo.svg"
// import rectangle from "../assets/rectangle.png"
import rectangle from "../assets/rectangle.png";

import oval from "../assets/oval.png"
import Path from "../assets/path.png"

const Header = () => {
    return (
        <>
            <Container className="desktopHeader-container">
                <div className="header-wrapper">
                    <Row className="header-row1">
                        <Col><img src={logo} alt="Atg-logo" className="logo" /></Col>
                        <Col id="header-searchCol">
                            <IoMdSearch className="header-searchIcon" />
                            <p className="header-searchPara">Search for your favourite groups in ATG</p>
                        </Col>
                        <Col id="header-createAcc"><p>Create Account <span>It's free</span><FaCaretDown className="downArrow" /></p></Col>
                    </Row>
                </div>
            </Container>

            <Container fluid className="mobileHeader-container">
                <div className="img-wrapper">
                <img  src={rectangle} alt="rectangle" className="rectangle" />
                <img  src={oval} alt="ovual" className="oval"/>
                <img  src={Path} alt="triangle" className='path' />
                </div>
            </Container>
        </>
    )
}

export default Header