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
            <nav className="navbar navbar-expand-lg navbar-light bg-light" data-bs-theme="light" >
                <a className="navbar-brand" href="/#" > <img src={require(`../img/um.png`)} alt="" width="50px" height="50px"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        //administrador
                        user.role === '1' ? (
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboardAdmin"> Panel Admin</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/addEvent">Crear Evento</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/listEvents">Listar Eventos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" onClick={handleLogOut} >Salir</Link>
                                </li>
                            </ul>
                        //usuario común
                        ): user.role === '2' ? (
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/dashboard"> Panel usuario</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/listEvents">Listar Eventos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/" onClick={handleLogOut} >Salir</Link>
                                </li>
                            </ul> 
                        ):( 
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Registro</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul> 
                        )
                    }
                </div>
            </nav> 
        </>
    )
}
