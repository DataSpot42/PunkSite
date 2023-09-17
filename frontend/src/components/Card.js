import { Link } from "react-router-dom"

const Card = ({ punk, deleteHandler}) => {
console.log(punk)
    return (
        <div className='eachToDo'>
            <h3>{punk.productName}</h3>
            <h3>£{punk.price}</h3>            
            <img className='card_img' src={punk.productImage} alt="" />

            <p className="buttonSpace">
            <button className="btnLinks" onClick={()=>deleteHandler(punk)}>delete</button>
            
            
            {/* <Link className="btnLinks"
                to={`edit-todo/${todo._id}`} 
            > edit
            </Link> */}</p>
        </div>
    )
}
export default Card