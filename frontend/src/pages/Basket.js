import { useEffect, useState, React } from "react";
import { readPunks } from "../api/readPunks";
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
        navigate(`/Shop/${id}`)   //navigate back to shop with current basket id
    }

    const deleteHandler = async (punk) => {
        deletePunk(punk, id)     // deletes item from database
        let updatedPunks = await getPunk(id)
        updatedPunks = await getPunk(id)  //updates basket display
        console.log(updatedPunks)
        setPunks(updatedPunks.items)
    };

    const addQPunkHandler = async (punk) => {
        addQPunk(punk, id)              // adds 1 to quanitiy
        let updatedPunks = await getPunk(id)
        updatedPunks = await getPunk(id)
        setPunks(updatedPunks.items)
    };

    const subQPunkHandler = async (punk) => {
        subQPunk(punk, id)              //subtracts 1 form quanitiy
        let updatedPunks = await getPunk(id)
        updatedPunks = await getPunk(id)
        setPunks(updatedPunks.items)

        if (punk.quantity === 1) { deleteHandler(punk, id) }
    };

    useEffect(() => {
        const fetchPunks = async () => {
            let data = await getPunk(id)
            setPunks(data.items)
        }
        fetchPunks()
    }, [])
    let total = 0
    if (!punks) return <h1>loading...</h1>
    for (let k = 0; k < punks.length; k++) {
        total = total + (punks[k].price * punks[k].quantity)  // works out price
    }
    return (
        <div>
        <button className="smbtnLinks" onClick={() => handlerBackToShop()}>Back to Shop</button>
        <div className="contianer">
            <div className="cards-grid-wrap">
            <>
                {
                    punks ?
                        punks.map((punk, index) => <Card key={punk.id} deleteHandler={deleteHandler} addQPunkHandler={addQPunkHandler} subQPunkHandler={subQPunkHandler} punk={punk} />)
                        : <p>loading...</p>   //displays basket items
                }
            </>
            <h1> Total £{total}</h1> 
        </div>
        </div>
        </div>
    );
}
export default Basket

