import { Link } from "react-router-dom"

const Card = ({ punks, deleteHandler}) => {
console.log(punks)
    return (
        <div className='eachToDo'>
            <h3>{punks.productName}</h3>
            <h3>£{punks.price}</h3>
            <h3>{punks.productImage}</h3>

            <p className="buttonSpace">
            <button className="btnLinks" onClick={()=>deleteHandler(punks)}>delete</button>
            
            
            {/* <Link className="btnLinks"
                to={`edit-todo/${todo._id}`} 
            > edit
            </Link> */}</p>
        </div>
    )
}
export default Card