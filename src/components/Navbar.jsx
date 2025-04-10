import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg encabezado sticky-top shadow">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <Link className="navbar-brand" to="">
                    BRANOS
                </Link>
                {/* Botón de cierre de sesión (puedes activarlo si lo necesitas)
                <button className="btn btn-outline-danger" onClick={() => {
                    localStorage.removeItem('user');
                    navigate('/');
                }}>
                    <i className="bi bi-box-arrow-right me-1"></i>
                    Cerrar sesión
                </button> 
                */}
            </div>
        </nav>
    );
};

export default Navbar;
