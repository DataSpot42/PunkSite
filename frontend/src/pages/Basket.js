import { useEffect, useState } from "react";
import { readPunks} from "../api/readPunks";
import Card from '../components/Card'
import { deletePunk } from "../api/deletePunk";
import '../components/shopcards.css'
import { motion } from "framer-motion";

const Basket = () => {
    const [punks, setPunks] = useState([]) 
    
    const deleteHandler = async (punk) => {
     deletePunk(punk) 
     
     /* setPunks(punk.filter(item => item !== punk)) */

     
     console.log(punk)
    };
    
    useEffect(() => {
        const fetchPunks = async () => {
            let data = await readPunks()
            setPunks(data.punk)
            console.log(data.message)
            console.log(data)
        }
        fetchPunks()
    }, [])


    if (!punks) return <h1>loading...</h1>
    return (
        <div className="toDoItems">
            <>
                {
                    punks ? punks.map((punk) => <Card key={punk._id} deleteHandler={deleteHandler} punk={punk}/>)
                        : <p>loading...</p>
                }
            </>
        </div>
    );

}

export default Basket