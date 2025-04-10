import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../styles/mapaProcesos.module.css'

const MapaProcesos = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="fondo my-4 shadow">
                <h2 className="header-title">
                    Mapa de Procesos
                </h2>

                <div className="mt-4">
                    <h5 className={style["section-title"]}>Procesos Estratégicos</h5>
                    <div className="row justify-content-center g-3">

                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/gestion-gerencial')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-bar-chart-line card-icon"></i>
                                    <p className="mt-2 mb-0">Gestión Gerencial</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/desarrollo-organizacional')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-diagram-3 card-icon"></i>
                                    <p className="mt-2 mb-0">Desarrollo organizacional</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h5 className={style["section-title"]}>Procesos Misionales</h5>
                    <div className="row justify-content-center g-3">
                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/operaciones')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-building-gear card-icon"></i>
                                    <p className="mt-2 mb-0">Operaciones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <h5 className={style["section-title"]}>Procesos de Apoyo</h5>
                    <div className="row justify-content-center g-3">
                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/seguridad-salud')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-heart-pulse card-icon"></i>
                                    <p className="mt-2 mb-0">Seguridad y salud en el trabajo</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/contabilidad')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-cash-coin card-icon"></i>
                                    <p className="mt-2 mb-0">Contabilidad y financiera</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-6 col-md-4 col-lg-3">
                            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/gestion-humana')} role="button">
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <i className="bi bi-people card-icon"></i>
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