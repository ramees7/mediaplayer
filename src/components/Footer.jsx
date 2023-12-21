import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <div className='' style={{width:"100%", height:"100%", backgroundColor:"white", color:"black"}}>
            <Row className='p-5'>
                <Col md='4'>
                    <h4><i className="fa-brands fa-spotify " style={{color: "black"}}></i>{' '}{' '}Spotify</h4>
                    <p style={{textAlign:'justify'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur non minima repellendus sapiente voluptatem. Reprehenderit voluptates blanditiis iusto error ratione. Ullam, officiis sapiente. Magni corrupti laborum ut atque libero labore.</p>
                </Col>
                <Col md='4'  sm='6' className='d-flex justify-content-center  my-4' >
                    <div className='d-flex flex-column'>
                        <h4>LINKS</h4>
                        <Link to={'/'} style={{textDecoration:"none", color:"black"}}>
                            Landing Page
                        </Link>
                        <Link to={'/home'} style={{textDecoration:"none", color:"black"}}>
                            Home Page
                        </Link>
                        <Link to={'/watch-history'} style={{textDecoration:"none", color:"black"}}>
                            Watch History Page
                        </Link>
                    </div>
                </Col>
                <Col md='4' sm='6' className='d-flex justify-content-center my-4'>
                    <div className='d-flex flex-column'>
                        <h4>Guides</h4>
                        <Link to={'https://react.dev/'} style={{textDecoration:"none", color:"black"}}>React</Link>
                        <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:"none", color:"black"}}>React Bootstrap</Link>
                        <Link to={'https://fontawesome.com/'} style={{textDecoration:"none" ,color:"black"}}>Font Awsome</Link>
                        <Link to={'https://fonts.google.com/'} style={{textDecoration:"none" ,color:"black"}}>Google font</Link>
                    </div>
                </Col>

            </Row>
            <p className='text-center py-4' style={{}}>Copyright © 2023 Spotify. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer