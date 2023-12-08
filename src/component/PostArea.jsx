import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import cardImg1 from "../assets/cardImg1.svg"
import card1User from "../assets/card1User.svg"
import BaselineError from "../assets/baselineError.svg"
import { FaCaretDown } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BsThreeDots, BsSend } from "react-icons/bs";
import { MdOutlineRemoveRedEye, MdEdit } from "react-icons/md";
import groupUserIcon from "../assets/groupUserIcon.svg"

import { cardContent } from '../constant';

import "./compoStyle/PostArea.css"

const PostArea = () => {
    const [dotClick, setDotClick] = useState(false)
    const [boxPosition, setBoxPosition] = useState({top:0, right:0})

    const dotClickHandler = () => {
        setDotClick(!dotClick)
        const dotPosition = event.target.getBoundingClientRect();
        setBoxPosition({
            top: dotPosition.bottom + window.scrollY,
            right: window.innerWidth - dotPosition.right + window.scrollX,
        })
    }




    return (
        <Container className="postArea-container" >
            <div className="postArea-ContainerWrapper">

                <div className="postArea-header">

                    <Nav variant="underline" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link id="postArea-navLink" href="/home" >All Posts(32)</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id="postArea-navLink" eventKey="link-1">Article</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id="postArea-navLink" eventKey="link-2">Event</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id="postArea-navLink" eventKey="link-3">Education</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id="postArea-navLink" eventKey="link-4">Job</Nav.Link>
                        </Nav.Item>
                    </Nav>

                    <div className="postArea-headerRight">
                        <Button variant="secondary">Write a Post <FaCaretDown className='post-icon' /></Button>
                        <Button variant="primary"><img src={groupUserIcon} alt="groupUser-Icon" />Join Group</Button>
                    </div>

                </div>

                <div className="mobile-postArea-header">
                    <div className="wrapper">
                        <p>Posts(368)</p>
                        <div className="postHeader-dropDown">
                            Filter: All <FaCaretDown className='post-icon' />
                        </div>
                    </div>
                </div>


                <div className="postArea-wrapper">
                    <div className="postArea-wrapper-left">
                        <div className="card-container">

                            {
                                cardContent.map((card) => (
                                    <div className="card" key={card.id}>
                                        {
                                            card.image ? (<img src={card.image} alt="card1-Image" />) : null
                                        }

                                        <div className="card-content">
                                            <p>{card.para1}</p>
                                            <div className="card-heading">
                                                <h2>{card.cardHeadingPara}</h2>
                                                <BsThreeDots className="card-dotsIcon" onClick={dotClickHandler} />
                                            </div>
                                            <p className='second-para'>{card.secondPara}</p>

                                            {
                                                card.Date && (<div className='card-datediv'>
                                                    <p className="date"><SlCalender className="icon" /> {card.Date}</p>
                                                    <p className="date"><IoLocationOutline className="icon" />{card.location}</p>
                                                </div>)
                                            }

                                           {
                                            card. Company && (<div className='card-datediv'>
                                            <p className="date"> {card.Company}</p>
                                            <p className="date"><IoLocationOutline className="icon" />{card.location}</p>
                                        </div>)
                                           }


                                            <div className="card-userDetails">
                                                <div className="leftDetail">
                                                    <img src={card.usserImg} alt="card1-UserImg" />
                                                    <h3>{card.userName}</h3>
                                                </div>

                                                <div className="rightDetail">
                                                    <div className="card-rightDetail-left">
                                                        <MdOutlineRemoveRedEye className='eye-icon' />
                                                        <p>{card.views}</p>
                                                    </div>
                                                    <div className='send-icon'><BsSend className='icon' /></div>
                                                </div>
                                            </div>

                                            <div className="mobile-card-userDetails">
                                                <div className="leftDetail">
                                                    <img src={card.usserImg} alt="card1-UserImg" />
                                                    <div className="img-right">
                                                        <h3>{card.cardHeadingPara}</h3>
                                                        <p>{card.views}</p>
                                                    </div>
                                                </div>

                                                <div className="rightDetail">
                                                    <div className='send-icon'><BsSend className='icon' /> Share</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                ))
                            }

                        </div>

                    </div>



                    <div className="postArea-wrapper-right">

                        <div className="rightSide-row1">
                            <div className="locationName">
                                <IoLocationOutline className="location-icon" /> <p>Noida,India</p>
                            </div>
                            <MdEdit className='edit-icon' />
                        </div>

                        <div className="rightside-row2">
                            <img src={BaselineError} alt="locationIcon-image" className="locationImg" />
                            <p>Your location will help us serve better and extend a personalised experience.</p>
                        </div>
                    </div>
                </div>


            </div>


            {
                dotClick && (<>
                    <div className="box" style={{ top: boxPosition.top, right: boxPosition.right }}>
                        <ul>
                            <li>Edit</li>
                            <li>Report</li>
                            <li>Option3</li>
                        </ul>
                    </div>
                </>)
            }
        </Container>
    )
}

export default PostArea