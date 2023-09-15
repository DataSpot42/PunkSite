import { useState } from "react"
import { addTodo } from "../api/addTodo"
import './style.css'

const AddTodo = () => {
    const [userInput, setUserInput] = useState("")
    const [updated, setUpdated] = useState(false)

    const handler = async (e) => {
        e.preventDefault()
        // what function will run?
        let response = await addTodo(userInput)
        setUpdated(true)
        console.log(response)
    }

    return (
        <div>
            <h1>
                add item
            </h1>
            {updated? <h2>Todo added: {userInput} </h2> : <h2></h2>}
            <form onSubmit={handler}>
                <input 
                type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button className="btnLinks" type="submit">submit</button>
            </form>
        </div>
    )
}

export default AddTodo