const API_URL = `http://localhost:4000`

export const getTodo = async (id) => {
    let respose = await fetch(`${API_URL}/todos/item/${id}`)
    let data = await respose.json()
    
    return data
}

