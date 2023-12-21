import { BASE_URL } from "./base_url";
import { commonRequest } from "./commonRequest";


// function to upload videos

export const addVideos = async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/videos`,body)
}

// to get videos
export const getVideos =async()=>{
    return await commonRequest("GET",`${BASE_URL}/videos`,'')
}

//to delete a specified video

export const deleteVideo=async(id)=>{
    return await commonRequest('DELETE',`${BASE_URL}/videos/${id}`)
}

//to add catagory video

export const addCatagoryVideos = async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/catagory`,body)
}

// to get catagory videos

export const getCatagory =async()=>{
    return await commonRequest("GET",`${BASE_URL}/catagory`,'')
}

//to delete a specified catagory video

export const deleteCatagory=async(id)=>{
    return await commonRequest('DELETE',`${BASE_URL}/catagory/${id}`)
}

// to get watch history

export const getHistory =async()=>{
    return await commonRequest("GET",`${BASE_URL}/watch-history `,'')
}

//to add history

export const addHistory=async(body)=>{
    return await commonRequest("POST",`${BASE_URL}/watch-history`,body)
}

// to get specfic video

export const getSpecificVideos =async(id)=>{
    return await commonRequest("GET",`${BASE_URL}/videos/${id}`,'')
}

//to update catagory

export const updateCatagory=async(id,body)=>{
    return await commonRequest("PUT",`${BASE_URL}/catagory/${id}`,body)
}

//to delete history

export const deleteHistory=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/watch-history/${id}`,'')
}