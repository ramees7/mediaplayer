import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Col, Row } from 'react-bootstrap'
import { getVideos } from '../services/allApis'

function View({resState,setResState}) {

const [allVideos,setAllVideos]=useState([])
const [delResponse,setDelResponse]=useState(false)

const delResUpdate=()=>{
  setDelResponse(true)
}

  const getVideo=async()=>{
    let res=await getVideos()
    setAllVideos(res.data)
    console.log(res.data)
    setDelResponse(false)
    setResState(false)
  }

  useEffect(()=>{
    getVideo()
  },[resState,delResponse])

  

  return (
    // <div className= 'd-flex p-4 border shadow rounded  justify-content-center' style={{flexWrap:"wrap"}} >
    <div className= 'p-5 border shadow rounded '  >
        {/* <Videocard/> */}
        <Row >
          {
            allVideos?allVideos.map(item=>(
              <Col sm={12} md={6}>
                <Videocard video={item} delResUpdate={delResUpdate}/>
              </Col>
            )): <div className='text-danger text-center py-3'>No Video Data Available</div>
          }
        </Row>
    </div>
  )
}

export default View


