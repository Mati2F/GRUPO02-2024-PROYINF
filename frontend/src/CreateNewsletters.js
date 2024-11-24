import React from 'react'
import './creacion_boletines.css';
/*import {Link} from 'react-router-dom'*/
import AllDrafts from './AllDrafts';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function CreateNewsletters() {
    const navigate = useNavigate();
    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
        .then(res => {
            //window.location.reload();
            navigate('/')
        })
        .catch(err=> console.log(err))
    }
    return (
    <div>
            <header>
                <a href = "/">
                    <img src="/minagri.png" alt="Logo" className="logo" />
                    <Link to='/admin/all-drafts'>Volver</Link>
                </a>
                <nav>
                    <div className="logo"></div>
                    <ul className="nav-links">
                        <li>VIGIFIA</li>
                        <li><a href="/admin/all-drafts">Borradores</a></li>
                        <li><a href="/admin/create-newsletters">Creación</a></li>
                        <li className="nav-item">
                            <button onClick={handleLogout}
                            className="nav-link-outline-0 border-0 bg-red text-prima"  class="login-button"
                            href="/">Cerrar sesion</button></li>
                    </ul>
                </nav>
            </header>

            <div className="main-content">
                <div className="form-container">
                    <form id="formulario">
                        <input 
                            type="text" 
                            id="texto" 
                            name="texto" 
                            placeholder="Escribir palabras claves separadas por comas" 
                            required 
                        />
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
            
            <footer>
                <div className="footer-container">
                    <div className="footer-right">
                        <div className="footer-section">
                            <h4>Sitios de interés</h4>
                            <p>MINAGRI</p>
                            <p>FIA</p>
                            <p>BIBLIOTECA DIGITAL FIA</p>
                        </div>
                        <div className="footer-section">
                            <h4>Contacto</h4>
                            <p>Loreley 1582, La Reina, Santiago</p>
                            <p>Teléfono: +562 2431 3000</p>
                        </div>
                        <div className="footer-section">
                            <h4>Redes sociales</h4>
                            <p>
                                <a href="https://twitter.com/FIA_Chile">
                                    <img className = "iconoX" src = "/iconos/X.png"></img>
                                </a>
                                <a href="https://www.instagram.com/fia_chile/">
                                    <img className = "iconoI" src = "/iconos/instagram.png"></img>
                                </a>
                                <a href="https://www.youtube.com/c/Fundaci%C3%B3nparalaInnovaci%C3%B3nAgraria">
                                    <img className = "iconoY" src = "/iconos/youtube.png"></img>
                                </a>
                                <a href="https://www.linkedin.com/company/fiachile">
                                    <img className = "iconoL" src = "/iconos/linkedin.png"></img>
                                </a>
                                <a href="https://www.facebook.com/OpiaChile/">
                                    <img className = "iconoF" src = "/iconos/facebook.png"></img>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
  )
}

export default CreateNewsletters