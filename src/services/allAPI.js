import { commonAPI } from './commonAPI'
import { serverURL } from './serverURL'


// upload video
export const uploadVideo = async(reqBody)=>{
    //return the value to add.jsx component
   return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}

//get all upload videos

export const getAllVideos = async()=>{
   //return the value to view.jsx component
   return await commonAPI('GET',`${serverURL}/videos`,"")
}

// to  delete a video
export const deleteAVideos = async(id)=>{
   return await commonAPI('DELETE',`${serverURL}/videos/${id}`,{})
}

// api to add history
export const addToHistory = async(videoDetails)=>{
   return await commonAPI('POST',`${serverURL}/history`,videoDetails)
}

// API to get history from json-server
export const getAllHistory = async ()=>{
   return await commonAPI('GET',`${serverURL}/history`,"")
}

// api to call to delete history
export const deleteVideoHistory = async (id)=>{
   return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

// api to add category
export const addAllCategory = async (body)=>{
   return await commonAPI('POST',`${serverURL}/category`,body)
}

// api to get all categories from json-server
export const getAllCategories = async ()=>{
   return await commonAPI('GET',`${serverURL}/category`,"")
}

// api to delete all categories
export const deleteCategories = async (id)=>{
   return await commonAPI('DELETE',`${serverURL}/category/${id}`,{})
}

// api to get a particular video from localhost3000/videos
export const getAVideo = async (id)=>{
   return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

// api to update the category with new videos
export const updateCategory = async(id,body)=>{
  return await commonAPI ('PUT',`${serverURL}/category/${id}`,body)
}