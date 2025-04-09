import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Prueba.css'

const MapaProcesos = () => {
    const navigate = useNavigate();

    return (
        <>
            <nav className="navbar navbar-expand-lg encabezado sticky-top shadow" style={{ minHeight: "70px", backgroundColor: "white" }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand" href="#">
                        BRANOS
                    </a>
                    <button className="btn btn-outline-danger" onClick={() => {
                        // Aquí puedes poner tu lógica para cerrar sesión
                        localStorage.removeItem('user'); // ejemplo
                        navigate('/');
                    }}>
                        <i className="bi bi-box-arrow-right me-1"></i> 
                        Cerrar sesión
                    </button>
                </div>
            </nav>


            <div className="container my-4 shadow">
                <h2 className="header-mapa">
                    Mapa de Procesos
                </h2>

                <div className="mt-4">
                    <h5 className="section-title">Procesos Estratégicos</h5>
                    <div className="row justify-content-center g-3">
                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/gestion-comercial')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-bag-check card-icon"></i>
                                    <p className="mt-2 mb-0">Gestión Comercial</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/gestion-gerencial')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-graph-up-arrow card-icon"></i>
                                    <p className="mt-2 mb-0">Gestión Gerencial</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/sistema-integrados')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-gear-wide-connected card-icon"></i>
                                    <p className="mt-2 mb-0">Sistemas Integrados de Gestión</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h5 className="section-title">Procesos Misionales</h5>
                    <div className="row justify-content-center g-3">
                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/operaciones')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-boxes card-icon"></i>
                                    <p className="mt-2 mb-0">Operaciones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h5 className="section-title">Procesos de Apoyo</h5>
                    <div className="row justify-content-center g-3">
                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/seguridad-salud')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-shield-plus card-icon"></i>
                                    <p className="mt-2 mb-0">Seguridad y salud en el trabajo</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/contabilidad')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-calculator card-icon"></i>
                                    <p className="mt-2 mb-0">Contabilidad y financiera</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/gestion-humana')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-person-workspace card-icon"></i>
                                    <p className="mt-2 mb-0">Gestión humana</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/compras')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-cart-check card-icon"></i>
                                    <p className="mt-2 mb-0">Compras</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default MapaProcesos;