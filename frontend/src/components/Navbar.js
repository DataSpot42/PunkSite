import { Link } from 'react-router-dom'
import './shopcards.css'
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className='navBarContainer'> 
            <header>
                <div className='navBar'>
                    
                    <Link className='navBarItems'  to='/'>
                        Login
                    
                    </Link>
                    
                    
                    <Link className='navBarItems' to='/Shop'>
                        Shop
                    </Link>
                    <Link className='navBarItems' to='/Basket'>
                        Basket
                    </Link>
                    

                </div>
            </header>
        </div>
    )
}

export default Navbar