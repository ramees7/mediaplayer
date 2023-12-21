import React, {  useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import Add from '../components/Add'
import Catagory from '../components/Catagory'
import View from '../components/View'
import { ToastContainer } from 'react-toastify'
import { Link } from 'react-router-dom'

function Home() {
  const [resState,setResState]=useState(false)
  const changeResState=()=>{
    setResState(true)
  }
  
  
  return (
    <div className='p-5' style={{backgroundColor:"black"}}>
        <h2 className='text-center pb-5'>All Vidoes <Link style={{float:"right", fontSize:"15px", textDecoration:"none", color:"#fff"}} to={'/watch-history'}> History</Link></h2>
        
      <Row>
        <Col md='2'>
          <Add changeResState={changeResState}/>
        </Col>
        <Col md='7'>
          <View resState={resState} setResState={setResState}/>
        </Col>
        <Col md='3'>
          <Catagory/>
        </Col>
      </Row>
      <ToastContainer/>
    </div>
  )
}

export default Home