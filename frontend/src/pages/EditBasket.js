import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getPunk } from "../api/getPunk"
import { editPunk } from "../api/editPunk"


const EditPunk = (punk) => { 


    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState('')
    const [userInput, setUserInput] = useState('')
    /* const [updated, setUpdated] = useState(false) */
    
    const submitHandler = async (punk) => {       
        let obj = {
            _id: toUpdate._id,
            items: userInput
        }
       let response = await editPunk(obj)         
        console.log(response)
        /* setUpdated(true)  */       
        
        return(obj)
    }

    useEffect(() => {
        const fetchPunk = async () => {
            let data = await getPunk(id)
            setToUpdate(data)
            console.log(data)
        }
        fetchPunk()
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
export default EditPunk