import { CommentResponse } from "../types/comment"


const BASE_API_URL = "https://dummyjson.com"



export async function fetchComments (){
    const res = await fetch(`${BASE_API_URL}/comments`)
    const data: CommentResponse = await res.json()
    return data.comments
}






