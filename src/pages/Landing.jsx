import React from 'react'
import { Col, Row,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigateByUrl=useNavigate()
  const clickNavigate=()=>{
    navigateByUrl('/home')
  }
  return (
    <div style={{backgroundColor:"black"}} >
      <Row className='align-items-center'>
        <Col>
        </Col>
        <Col md='4' >
          <div>
            <h1 className='text-center pt-5'>Welcome to <span className='text-danger mb-4'>Spotify </span></h1>
            <p className='px-4' style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In et labore nihil quam rerum sit aliquid quae vitae aut quis repellendus aliquam doloremque, fugiat quas eligendi consequatur dignissimos itaque sapiente!</p>
            <div className='d-flex justify-content-center pt-4'>
              <button className='btn btn-success' onClick={clickNavigate}>Get Started</button>
            </div>

          </div>
          
        </Col>
        <Col>
        </Col>
        <Col md='6' className='my-5'>
          <img height={'350px'} src="https://papers.co/wallpaper/papers.co-al10-out-the-dark-guitar-player-music-35-3840x2160-4k-wallpaper.jpg" alt="" />
        </Col>
      </Row>
      <div className='mt-5 '>
        <h1 className='text-center my-5'>Features</h1>
       <div className='d-flex justify-content-center'>
       <Row className='pb-5'>
          {/* <Col></Col> */}
          <Col md='4' className='pb-4 px-5' >
            <div className='d-flex justify-content-center'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" height={'240px'} src="https://cdn.dribbble.com/users/3191392/screenshots/6446992/dribb.gif" />
                <Card.Body>
                  <Card.Title className='text-center'>Managing Videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            </Col>
            {/* <Col></Col> */}
          <Col md='4' className='pb-4 px-5'>
           <div className='d-flex justify-content-center'>
           <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" height={'240px'} src="https://i.pinimg.com/originals/1f/82/c9/1f82c992767ce8aeb6ef8b84a81a0eb2.gif" />
                <Card.Body>
                  <Card.Title className='text-center'>Upload Videos</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
           </div>
            </Col>
            {/* <Col></Col> */}
          <Col md='4' className='pb-4 px-5'>
            <div className='d-flex justify-content-center'>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" height={'240px'} src="https://imgvisuals.com/cdn/shop/products/animated-loading-white-line-ui-icon-264849.gif?v=1697071131" />
                <Card.Body>
                  <Card.Title className='text-center'>Watch Hstory</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            
            </Col>
            {/* <Col></Col> */}
          
        </Row>
       </div>
          
      </div>
      <div className='p-5'>
        <div className='p-3 border border-danger rounded shadow '>
          <Row>
            <Col className='me-5'>
              <h1 className='text-center'>Simple,Fast and Powerfull</h1>
              <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate rerum atque magnam, aliquam, dignissimos quis doloribus corrupti quam doloremque corporis esse ut ratione quia adipisci amet nesciunt autem tempora!Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores cupiditate rerum atque magnam, aliquam, dignissimos quis doloribus corrupti quam doloremque corporis esse ut ratione quia adipisci amet nesciunt autem tempora!</p>
            </Col>
            <Col className='ms-5'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pd_6WN9GVtQ?si=s3H37qK3ViUFLoax" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Landing