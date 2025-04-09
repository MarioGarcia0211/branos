const MapaProcesos = () => {
    return (
        <div className="container my-5 p-4 border rounded bg-light">
            <h2 className="text-center fw-bold mb-4">MAPA DE PROCESOS</h2>

            {/* PROCESOS ESTRATÉGICOS */}
            <div className="text-center fw-semibold mb-3"><h5>PROCESOS ESTRATÉGICOS</h5></div>
            <div className="row justify-content-center mb-4">
                <div className="col-md-3 mb-2">
                    <div className="card text-center w-100 h-100">
                        <div className="card-body d-flex flex-column align-items-center p-3">
                            <i className="bi bi-briefcase-fill fs-3 mb-2"></i>
                            <span>Gestión Comercial</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2">
                    <div className="card text-center w-100 h-100">
                        <div className="card-body d-flex flex-column align-items-center p-3">
                            <i className="bi bi-bar-chart-line-fill fs-3 mb-2"></i>
                            <span>Gestión Gerencial</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-2 d-flex">
                    <a href="/proceso" className="text-decoration-none w-100">
                        <div className="card text-center w-100 h-100">
                            <div className="card-body d-flex flex-column align-items-center justify-content-center p-3">
                                <i className="bi bi-gear-fill fs-3 mb-2"></i>
                                <span className="text-dark">Sistema e integración y de gestión</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            {/* PROCESOS MISIONALES */}
            <div className="text-center fw-semibold mb-3">PROCESOS MISIONALES</div>
            <div className="row justify-content-center mb-4">
                <div className="col-md-4">
                    <div className="card text-center">
                        <div className="card-body d-flex flex-column align-items-center p-3">
                            <i className="bi bi-truck fs-3 mb-2"></i>
                            <span>Operaciones</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROCESOS DE APOYO */}
            <div className="text-center fw-semibold mb-3">PROCESOS DE APOYO</div>
            <div className="row justify-content-center">
                <div className="col-md-4 mb-2">
                    <div className="card text-center">
                        <div className="card-body d-flex flex-column align-items-center p-3">
                            <i className="bi bi-shield-plus fs-3 mb-2"></i>
                            <span>Seguridad y salud en el trabajo</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card text-center">
                        <div className="card-body d-flex flex-column align-items-center p-3">
                            <i className="bi bi-cash-stack fs-3 mb-2"></i>
                            <span>Contabilidad Financiera</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card text-center">
                        <div className="card-body d-flex flex-column align-items-center p-3">
                            <i className="bi bi-people-fill fs-3 mb-2"></i>
                            <span>Gestión humana</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card text-center">
                        <div className="card-body d-flex flex-column align-items-center p-3">
                            <i className="bi bi-basket fs-3 mb-2"></i>
                            <span>Compras</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-2">
                    <div className="card text-center">
                        <div className="card-body d-flex flex-column align-items-center p-3">
                            <i className="bi bi-box-arrow-right fs-3 mb-2"></i>
                            <span>Cerrar Sesión</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapaProcesos;