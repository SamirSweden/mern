import { TodosResponse } from "../types/todo";



const BASE_URL = "https://dummyjson.com"


export async function fetchTodos(){
    const res = await fetch(`${BASE_URL}/todos`)
    const data: TodosResponse = await res.json()
    return data.todos
}