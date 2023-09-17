import { Link } from "react-router-dom"

const Card = ({ punk, deleteHandler, subQPunkHandler, addQPunkHandler}) => {

    return (
        <div className='eachToDo'>
            <h3>{punk.productName}</h3>
            <h3>£{punk.price}</h3>
            <h4>Quantity: {punk.quantity}</h4>          
            <img className='card_img' src={punk.productImage} alt="" />

            <p className="buttonSpace">
            <button className="btnLinks" onClick={()=>deleteHandler(punk)}>delete</button>
            <button className="btnLinks" onClick={()=>addQPunkHandler(punk)}>Add</button>
            <button className="btnLinks" onClick={()=>subQPunkHandler(punk)}>Subtract</button>
           </p>
        </div>
    )
}
export default Card