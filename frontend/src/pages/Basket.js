import { useEffect, useState, React } from "react";
import { readPunks} from "../api/readPunks";
import { getPunk } from "../api/getPunk"
import Card from '../components/Card'
import { deletePunk } from "../api/deletePunk";
import { addQPunk } from "../api/addQPunk";
import { subQPunk } from "../api/subQPunk";
import '../components/shopcards.css'
import { motion } from "framer-motion";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"


const Basket = () => {
    console.log(`Welcome to the Basket`)
    const [punks, setPunks] = useState()    
    const { id } = useParams()    
    
    const navigate = useNavigate() 
    
    const handlerBackToShop = () => {
    
    navigate (`/Shop/${id}`)     
    }
    
    const deleteHandler = async (punk) => {
        console.log(punk,id)
        deletePunk(punk,id) 
        let updatedPunks = await getPunk(id)
        updatedPunks = await getPunk(id)
        console.log (updatedPunks)
        setPunks(updatedPunks.items) 
       };
    
       const addQPunkHandler = async (punk) => {
        
        addQPunk(punk,id) 
        let updatedPunks = await getPunk(id)
        updatedPunks = await getPunk(id)        
        setPunks(updatedPunks.items)    
       };   

       const subQPunkHandler = async (punk) => {
        subQPunk(punk,id) 
        let updatedPunks = await getPunk(id)
        updatedPunks = await getPunk(id)
        console.log (updatedPunks)
        setPunks(updatedPunks.items) 
        console.log(punk)
        
        if (punk.quantity === 1) { console.log(`Zero!`); deleteHandler(punk,id) }    
        
    
        console.log(punk)
       
       };   


    useEffect(() => {
        const fetchPunks = async () => {
            let data = await getPunk(id)
            setPunks(data.items)            
        }
        fetchPunks()
    }, [])

    console.log(punks)
    let total = 0
    
    
    if (!punks) return <h1>loading...</h1>
    for (let k=0; k<punks.length; k++) {
        total = total + (punks[k].price * punks[k].quantity)
    }
    console.log(total)

    return (
        <div className="toDoItems">
            <button className="btnLinks" onClick={()=>handlerBackToShop()}>Back to Shop</button>
            <>
                {
                    punks ? 

                    
                    
                    punks.map((punk,index) => <Card key={punk.id} deleteHandler={deleteHandler} addQPunkHandler={addQPunkHandler} subQPunkHandler={subQPunkHandler}  punk={punk}/>)
                        : <p>loading...</p>
                }
            </>
            
            <h1> Total £{total}</h1>
        </div>
    );

}

export default Basket

