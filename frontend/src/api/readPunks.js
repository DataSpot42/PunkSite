const API_URL = `http://localhost:4000`

export const readPunks = async () => {
     // fetch the data from this endpoint 
     // your backend server is running on port 4000
     // from your routes>items.js 
     // this request is for the 'getTodos' controller
     let response = await fetch(`${API_URL}/punks/items`)
     // convert to json()
     let data = await response.json()
     // return the data collect from fetch 
     return data
}