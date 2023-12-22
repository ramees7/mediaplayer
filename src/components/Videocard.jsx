import React, { useState } from 'react'
import {  Card, Modal } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { addHistory, deleteVideo } from '../services/allApis';
import { v4 as uuidv4 } from 'uuid';



function Videocard({video ,delResUpdate,isCatagory,iss}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    let date =new Date()
    // console.log(date)
    let id=uuidv4()
    const  {thumbnail,caption,url}=video
    console.log(id,thumbnail,caption,url,date)
    let body={id,thumbnail,caption,url,date}
    const res=await addHistory(body)
    console.log(res)
  }

  const removeVideo=async (id)=>{
    console.log(id)
    let res=await deleteVideo(id)
    console.log(res)
    if(res.status>=200 || res.status<300){
      delResUpdate()
      toast.success("Video Deleted Successfully")
    }
    else{
      toast.error("Deletion failed")
    }
  }

  const ondrag=(e,id)=>{
    console.log("Target Video Id",id)
    e.dataTransfer.setData("videoid",id)
  }

  return (
    <div>
      <Card style={{ width: '100%'  }} className='my-4'>
      {/* <Card.Img variant="top" onClick={handleShow} src="https://i.scdn.co/image/ab67616d0000b273bca30634e6cad10b97c03d21" /> */}
      
      <Card.Img  style={{height:'200px'}} variant="top"  src={video?.thumbnail} draggable onDragStart={(e)=>ondrag(e,video?.id)} onClick={handleShow} />
      <Card.Body>
        {/* <Card.Title className='text-center'>Ae Dil He Mushkil</Card.Title> */}

        {
          isCatagory?"":
          <Card.Title className='text-center'>{video?.caption} <span style={{float:"right", position:"relative", top:"-6px"}} className='btn' onClick={()=>removeVideo(video?.id)}><i className="fa-solid fa-trash fa-lg " style={{color: "#a80505"}}></i></span></Card.Title>
        }
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="400" src={`${video?.url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>   
        {/* <iframe width="100%" height="400" src="https://www.youtube.com/embed/6FURuLYrR_Q?autoplay=1" title="Ae Dil Hai Mushkil Title Track Full Video - Ranbir, Anushka, Aishwarya|Arijit|Pritam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Videocard


