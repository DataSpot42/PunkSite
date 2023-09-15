import { Link } from 'react-router-dom'
import '../pages/style.css'
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className='navBarContainer'> 
            <header>
                <div className='navBar'>
                    
                    <Link className='navBarItems'  to='/'>
                        my list
                    
                    </Link>
                    
                    
                    <Link className='navBarItems' to='/add-todo'>
                        add item
                    </Link>
                    
                    

                </div>
            </header>
        </div>
    )
}

export default Navbar