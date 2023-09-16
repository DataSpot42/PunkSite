import { useState } from "react"
import { addPunk } from "../api/addPunk"
import '../components/shopcards.css'

const Login = () => {
    const [userInput, setUserInput] = useState("")
    const [updated, setUpdated] = useState(false)

    const handler = async (e) => {
        e.preventDefault()
        let loginName = {}
        let loginArray = {
            orderNum: 
                1234
            ,
            custName:                 userInput
            ,
            items: [{
                item: 0,    
                productID: 0,
                productName: "Beer",
                productImage: "urlhere",
                quantity: 0,
                price: 0.00,
                
                
    }] } 
        
        console.log(loginArray)
        // what function will run?
        let response = await addPunk(loginArray)
        setUpdated(true)
        console.log(response)
    }

    return (
        <div>
            <h1>
                To Start Shopping Please provide your name
            </h1>
            {updated? <h2>Hello {userInput} Click shop in the NavBar to start shopping</h2> : <h2></h2>}
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

export default Login