const API_URL = `http://localhost:4000`

export const editTodo = async (todo) => {
    
    let obj = { text: todo.text }
    const response = await fetch(`${API_URL}/todos/items/${todo._id}`, {       
    
        // method type?
        method: 'PATCH',
        // sending body, stringify data
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(obj)
        // content type?
        
        
    })
    const json = await response.json()
    return json
     
}