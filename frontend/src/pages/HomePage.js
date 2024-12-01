import React from "react";

const HomePage = (props) => {
    return (
     <main className="holder">
        <div className="homeimg">
            <img src="/img/banner-img.png" width="100%" alt="banner"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos-left">
                <p>
                    Dato Mata Relato
                </p>
            </div>
            <div className="testimonios-right">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">"Simplemente excelente"</span>
                    <span className="autor">"Tita"</span>
                </div>
            </div>
        </div>
     </main>
    )
}

export default HomePage