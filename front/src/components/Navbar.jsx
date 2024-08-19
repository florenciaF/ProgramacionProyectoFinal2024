import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';


export const Navbar = () => {

    const { user, setUser } = useContext(UserContext);

    const handleLogOut = () => {
        setUser({
            logged:false
        })
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark" data-bs-theme="dark" >
                <a class="navbar-brand" href="/#" > <img src={require(`../img/um.png`)} alt="" width="50px" height="50px"/></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item active">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/register">Registro</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/" onClick={handleLogOut} >Salir</Link>
                        </li>
                    </ul>
                </div>
            </nav> 
        </>
    )
}
