import { useState } from "react"
import { addPunk } from "../api/addPunk"
import { useNavigate } from "react-router-dom"
import '../components/shopcards.css'

const Login = () => {
    const [userInput, setUserInput] = useState("")
    
    const navigate = useNavigate()
    const handler = async (e) => {
        e.preventDefault()
        let loginName = {}
        let loginArray = {
            orderNum: 12345,
            custName: userInput,
            items: [{item: 0}]
                
     } 
        
        console.log(loginArray)
        // what function will run?
        let response = await addPunk(loginArray)     
        console.log(response)
        navigate (`/Shop/${response._id}`)  

    }

    return (
        <div className="log">
            <div className="login-container">
            <h1>
            DRINK MORE BEER TO CELEBRATE. REPEAT FOREVER.
            </h1>
            <h2>WELCOME TO PLANET BREWDOG</h2>
           <div className="input-btn">
            <form onSubmit={handler}>
                <input className="input-login"
                type="text"
                placeholder="Whats Your Name?"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button className="btnLinks" type="submit">Login</button>
               
            </form>
            </div>
            </div>
        </div>
    )
}

export default Login