import React, {useState, useContext} from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Book from './icon/book.svg'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state =useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')      
        localStorage.removeItem('firstLogin')
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Subjects</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }
    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }


    return (
        <header>
             <div className="menu" onClick={() => setMenu(!menu)}>
                 <img src={Menu} alt=" " width="30" />
             </div>
             <div className="logo">
                <h1>
                <Link to="/">{isAdmin ? 'Admin' : 'MCQ'}</Link>                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Link to='/'>{isAdmin ? 'Subject' : 'Subjects'}</Link></li>

                {isAdmin && adminRouter()}
                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu"/>
                </li>
            </ul>

             {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Book} alt="" width="30" />
                    </Link>
                </div>
            }
        </header>
    )
}

export default Header
