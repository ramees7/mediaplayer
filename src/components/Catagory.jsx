import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { addCatagoryVideos, deleteCatagory, getCatagory, getSpecificVideos, updateCatagory } from '../services/allApis';
import { toast } from 'react-toastify';
import Videocard from './Videocard'


function Catagory() {

  const [show, setShow] = useState(false);
  const [catagories,setCatagories]=useState([])
  const [catagoryDetails,setCatagoryDetails]=useState({
    id:'',catagoryName:'',allVideos:[]
  })

  const handleCatagoryList=async()=>{
    const res=await getCatagory()
    console.log(res.data)
    setCatagories(res.data)
  } 

  const handleCatagory=(e)=>{
    const {name,value}=e.target
    setCatagoryDetails({...catagoryDetails,[name]:value})
  }
  console.log(catagoryDetails)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleRequest=async()=>{
    const {id,catagoryName}=catagoryDetails
    if(!id || !catagoryName){
      toast.warning("Please Fill")
    }
    else{
      let res =await addCatagoryVideos(catagoryDetails)
      console.log(res)
      if(res.staus>=200 || res.status<300){
        setShow(false)
        handleCatagoryList()
        toast.success("Catagory Uploaded")
      }
      else{
        toast.error("Catagory Adding Failed")
      }
    }
  }


  const handleCatagoryDelete=async(id)=>{
    const res=await deleteCatagory(id)
    console.log(res)
    if(res.status>=200 || res.status<300){
      toast.success("Catagory Removed")
      handleCatagoryList()
    }
    else{
      toast.error("Failed")
    }
  }

  




  useEffect(()=>{
    handleCatagoryList()
  },[])

  const dragOver=(e)=>{
    e.preventDefault()
    console.log("dragging over catagory board")
  }

  const onDropHandle=async(e,id)=>{
    console.log("Drop target catagory id ",id)
    let videoid=e.dataTransfer.getData("videoid")
    console.log("video id",videoid)
    const video=await getSpecificVideos(videoid)
    console.log(video.data)

    let selectedCatagory=catagories?.find(item=>item?.id===id)
    console.log(selectedCatagory)
    selectedCatagory.allVideos.push(video.data)
    console.log(selectedCatagory)
    const res=await updateCatagory(id,selectedCatagory)
    console.log(res)

    if(res.status>=200 || res.status<300){
      toast.success("catagory updated")
      handleCatagoryList()
    }
    else{
      toast.error("updation failed")
    }
  }
  

  return (
    <div>
      <button onClick={handleShow} className='btn w-100 btn-primary p-3'>Add Catagory</button>

      {
        catagories?catagories.map(item=>(
          <div className='bg-primary m-3 p-3 border shadow rounded' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>onDropHandle(e,item?.id)}>
            <div>
              <span>
                {item?.catagoryName}
              
              </span>
              <span className='btn' style={{float:"right", position:"relative", top:"-6px"}} onClick={()=>handleCatagoryDelete(item?.id)}><i className="fa-solid fa-trash fa-lg " style={{color: "#a80505"}}></i></span>
            </div>
            <div>
              {
                item?.allVideos?.map(video=>(
                  <Videocard video={video} isCatagory={true} iss={true}/>
                )) 
              }
            </div> 
    
            
            
                      
           
            
          </div>
        )): <div className='text-danger text-center py-3'>No Data Available</div>
      }

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingID" label="Id" className="mb-3" >
        <Form.Control type="text" placeholder="name@example.com" name='id' onChange={(e)=>handleCatagory(e)}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingCatagory" label="Catagory Name">
        <Form.Control type="text" placeholder="Password" name='catagoryName' onChange={(e)=>handleCatagory(e)}/>
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleRequest}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Catagory