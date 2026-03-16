

type Todos = {
    id: number
    todo: string 
    completed: string 
    userId: number
}


export type TodosResponse = {
    todos: Todos[]
}
