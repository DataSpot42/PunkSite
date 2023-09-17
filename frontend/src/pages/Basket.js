import { useEffect, useState } from "react";
import { readPunks} from "../api/readPunks";
import { getPunk } from "../api/getPunk"
import Card from '../components/Card'
import { deletePunk } from "../api/deletePunk";
import '../components/shopcards.css'
import { motion } from "framer-motion";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"




const Basket = () => {
    const [punks, setPunks] = useState()
    const { id } = useParams()
    console.log(`i'm here`)
    console.log(id)
    const navigate = useNavigate() 
    
    const handlerBackToShop = () => {
    
    navigate (`/Shop/${id}`)     
    }
    
    const deleteHandler = async (punk) => {
        deletePunk(punk) 
        
        setPunks(punks.filter(item => item !== punk))
   
        
        console.log(punk)
       };


    useEffect(() => {
        const fetchPunks = async () => {
            let data = await getPunk(id)
            setPunks(data.items)
            console.log(data.message)
            console.log(data)
        }
        fetchPunks()
    }, [])

    console.log(punks)
    
    if (!punks) return <h1>loading...</h1>
    return (
        <div className="toDoItems">
            <button className="btnLinks" onClick={()=>handlerBackToShop()}>Back to Shop</button>
            <>
                {
                    punks ? punks.map((punk) => <Card key={punk.id} deleteHandler={{deleteHandler}} punk={punk}/>)
                        : <p>loading...</p>
                }
            </>
        </div>
    );

}

export default Basket

/* deleteHandler={deleteHandler} */