import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getTodo } from "../api/getTodo"
import { editTodo } from "../api/editTodo"


const EditTodo = (punk) => { 


    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState('')
    const [userInput, setUserInput] = useState('')
    /* const [updated, setUpdated] = useState(false) */
    
    const submitHandler = async (punk) => {       
        let obj = {
            _id: toUpdate._id,
            items: updateBasket        
        }
       let response = await edit(obj)         
        console.log(response)
        /* setUpdated(true)  */       
        
        return(obj)
    }

    useEffect(() => {
        const fetchTodo = async () => {
            let data = await getPunk(id)
            setToUpdate(data)
            console.log(data)
        }
        fetchTodo()
    },[])
    return (
        <div>
            <h1>edit</h1>
            <h2>{toUpdate.text}</h2>
            {/* {updated? <h2>Todo updated to: {userInput} </h2> : <h2></h2>} */}
            {/* <h2>Edit todo: {data}</h2> */}
            <input 
                placeholder="Enter your name"
                onChange={(e) => {setUserInput(e.target.value)}}
            />
            <button className="btnLinks" onClick={submitHandler}>submit</button>
        </div>
    )
}
export default EditTodo