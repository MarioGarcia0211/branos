import React from 'react';
import { useNavigate } from 'react-router-dom';

const DesarrolloOrg = () => {
    const navigate = useNavigate();

    return (
        
        <div className="fondo my-4 shadow">
            <h2 className="header-title">
                Módulo de desarrollo organizacional
            </h2>

            <div className="mt-4">
                <div className="row justify-content-center g-5 mb-4">
                    <div className="col-10 col-sm-6 col-md-4 col-lg-4">
                        <div className="card h-100 text-center shadow card-hover" role="button">
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-bag-check card-icon"></i>
                                <p className="mt-2 mb-0">Caracterización</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-sm-6 col-md-4 col-lg-4">
                        <div className="card h-100 text-center shadow card-hover" role="button">
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-graph-up-arrow card-icon"></i>
                                <p className="mt-2 mb-0">Gestión de auditorias</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-sm-6 col-md-4 col-lg-4">
                        <div className="card h-100 text-center shadow card-hover" role="button">
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-gear-wide-connected card-icon"></i>
                                <p className="mt-2 mb-0">Gestión documental</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-sm-6 col-md-4 col-lg-4">
                        <div className="card h-100 text-center shadow card-hover" role="button">
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-shield-plus card-icon"></i>
                                <p className="mt-2 mb-0">Acciones de mejora</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-sm-6 col-md-4 col-lg-4">
                        <div className="card h-100 text-center shadow card-hover" role="button">
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-calculator card-icon"></i>
                                <p className="mt-2 mb-0">Matriz de riesgo y oportunidades de desarrollo org</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-10 col-sm-6 col-md-4 col-lg-4">
                        <div className="card h-100 text-center shadow card-hover" role="button">
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <i className="bi bi-person-workspace card-icon"></i>
                                <p className="mt-2 mb-0">Indicadores de desarrollo org</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesarrolloOrg;