const API_URL = `http://localhost:4000`

export const getPunk = async (id) => {
    let respose = await fetch(`${API_URL}/punks/item/${id}`)
    let data = await respose.json()
    
    return data
}

