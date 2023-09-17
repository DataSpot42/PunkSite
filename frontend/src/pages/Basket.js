import { useEffect, useState } from "react";
import { readPunks} from "../api/readPunks";
import { getPunk } from "../api/getPunk"
import Card from '../components/Card'
import { deletePunk } from "../api/deletePunk";
import '../components/shopcards.css'
import { motion } from "framer-motion";
import { useParams } from 'react-router-dom';


const Basket = () => {
    const [punks, setPunks] = useState()
    const { id } = useParams()
    console.log(`i'm here`)
    console.log(id)
    /* fetchPunks() */
    /* console.log(id) */
    /* let punk = await getPunk(id)
    console.log(punk) */
    /* const deleteHandler = async (punk) => {
     deletePunk(punk) 
     
     setPunks(punk.filter(item => item !== punk))

     
     console.log(punk)
    }; */
    
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
            <>
            
                {
                    punks ? punks.map((punks) => <Card key={punks}  punks={punks}/>)
                        : <p>loading...</p>
                }
            </>
        </div>
    );

}

export default Basket

/* deleteHandler={deleteHandler} */