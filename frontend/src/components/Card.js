import { Link } from "react-router-dom"

const Card = ({ todo, deleteHandler}) => {

    return (
        <div className='eachToDo'>
            <h3>{todo.text}</h3>
            <p className="buttonSpace">
            <button className="btnLinks" onClick={()=>deleteHandler(todo)}>delete</button>
            
            
            <Link className="btnLinks"
                to={`edit-todo/${todo._id}`} 
            > edit
            </Link></p>
        </div>
    )
}
export default Card