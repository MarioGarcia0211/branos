import React from 'react'
import { useNavigate } from 'react-router-dom';

const GestionDocumental = () => {
    const navigate = useNavigate();
  return (
    <div className="fondo my-4 shadow">
      <h2 className="header-title">Gestión Documental</h2>

      <div className="mt-4">
        <div className="row justify-content-center g-5 mb-4">

          <div className="col-10 col-sm-6 col-md-4 col-lg-5">
            <div className="card h-100 text-center shadow card-hover" role="button">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-archive-fill card-icon"></i>
                <p className="mt-2 mb-0">Listado maestro de información documentada</p>
              </div>
            </div>
          </div>

          <div className="col-10 col-sm-6 col-md-4 col-lg-5">
            <div className="card h-100 text-center shadow card-hover" onClick={() => navigate('/manual-gestiondocumental')} role="button">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-journal-text card-icon"></i>
                <p className="mt-2 mb-0">Manual de gestión documental</p>
              </div>
            </div>
          </div>

          <div className="col-10 col-sm-6 col-md-4 col-lg-5">
            <div className="card h-100 text-center shadow card-hover" role="button">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-file-earmark-lock2 card-icon"></i>
                <p className="mt-2 mb-0">Política de gestión documental</p>
              </div>
            </div>
          </div>

          <div className="col-10 col-sm-6 col-md-4 col-lg-5">
            <div className="card h-100 text-center shadow card-hover" role="button">
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className="bi bi-book-half card-icon"></i>
                <p className="mt-2 mb-0">Manuales de sistemas integrales</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default GestionDocumental