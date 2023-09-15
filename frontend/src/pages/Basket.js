import { useEffect, useState } from "react";
import { readTodos } from "../api/readPunks";
import Card from '../components/Card'
import { deleteTodo } from "../api/deleteTodo";
import './style.css'
import { motion } from "framer-motion";

const Basket = () => {
    const [punks, setPunks] = useState([]) 
    
    const deleteHandler = async (punk) => {
     deleteTodo(punk) 
     
     setPunks(punk.filter(item => item !== punk))

     
     console.log(punk)
    };
    
    useEffect(() => {
        const fetchPunks = async () => {
            let data = await readPunks()
            setPunks(data.punks)
            console.log(data.message)
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