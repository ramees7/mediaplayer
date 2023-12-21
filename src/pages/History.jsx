import React, { useEffect, useState } from 'react'
import { deleteHistory, getHistory } from '../services/allApis'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { Modal } from 'react-bootstrap'


function History() {
  const [show,setShow]=useState (false)
  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);
const [history,setHistory]=useState([])

const handleHistoryList=async()=>{
  const res=await getHistory()
  setHistory(res.data)
  console.log(res.data)
}

const handlehistoryDelete=async(id)=>{
  const res=await deleteHistory(id)
  console.log(res)
  if(res.status>=200 || res.status<300){
    toast.success("History Removed")
    handleHistoryList()
  }
  else{
    toast.error("Failed")
  }
}

useEffect(()=>{
  handleHistoryList()
},[])
  return (
    <div className='p-5 ' style={{backgroundColor:"#000"}}>
      <h2 className='text-center pb-5'>Watch History <Link style={{float:"right", fontSize:"15px", textDecoration:"none", color:"#fff"}} to={'/home'}> Back to Home</Link></h2>
      <table className='table shadow rounded'>
        <tr className='bg-success '>
          <th className='p-3'>ID</th>
          <th style={{}}>Thumbnail</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Date</th>
          <th></th>
        </tr>
        {
          history.map((item,index)=>(
            <tr>
              <td className='p-3'>{index+1}</td>
              <td ><img src={item?.thumbnail} style={{backgroundColor:"#000"}} onClick={handleShow}  width={200} height={100} alt="" /></td>
              {/* <td className='pt-3 '><Link to={`${item?.url}?autoplay=1` } style={{backgroundColor:"#000"}}><img src={item?.thumbnail}  width={200} height={100} style={{backgroundColor:"black"}} alt="" /></Link></td>              <td >{item?.caption}</td> */}
              {/* <td ><Link to={`${item?.url}?autoplay=1` } style={{color:"white", backgroundColor:"black", textDecoration:"none"}}>{item?.url}</Link></td> */}
              <td >{item?.caption}</td>
              <td   onClick={handleShow} >{item?.url}</td>
              {/* <td><Link to={`${item?.url}?autoplay=1` }style={{ textDecoration:"none", color:"#fff", backgroundColor:"#000"}}>{item?.url}</Link></td> */}
              <td >{item?.date}</td>
              <td><span className='btn'  style={{backgroundColor:"#000"}}><i className="fa-solid fa-trash fa-lg " onClick={()=>handlehistoryDelete(item?.id)} style={{color: "#a80505"}}></i></span></td>
            </tr>
          ))
        }
        
      </table>
      {
         history.map((item)=>(
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>{item?.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe width="100%" height="400" src={`${item?.url}?autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     
          </Modal.Body>
        </Modal>
         ))
        }

      <ToastContainer/>
    </div>
  )
}

export default History