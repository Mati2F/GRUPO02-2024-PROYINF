import React, {useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'
import './login.css'
function Login() {
    const port = process.env.PORT || 8081

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault();
        axios.post(`http://localhost:${port}/login`, {email, password})
        .then(res => {
            console.log(res)
            console.log(res);
            if (res.data === "Login successfully") {
                // Redirect to the main page on successful login
                navigate('/main'); // Adjust the path as needed
            } else {
                // Handle error response (e.g., no record found)
                alert("No record found. Please check your email and password.");
            }
            //LOGIN EXITOSO DEBE REDIRECCIONAR A MAIN PAGE!!
        })
        .catch(err => console.log(err))
    }
    
    return (
        <div>
            <header>
                <div className="header-container">
                    <img src={"/logo.png"} alt="Logo" className="logo" />
                </div>
                <nav>
                    <div className="logo"></div>
                    <ul className="nav-links">
                        <li>Boletines</li>
                        <li>Solutions</li>
                        <li>Contact</li>
                        <li><button>Inicia sesión</button></li>
                    </ul>
                </nav>
            </header>

            {/* Sección de Login */}
            
            <section className="login-section">
                <div className="login-container">
                <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' placeholder='Enter Email' className ='form-control' required
                            onChange={e=> setEmail(e.target.value)}></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' placeholder='Enter Password' className ='form-control' required
                            onChange={e=> setPassword(e.target.value)}></input>
                        </div>
                        <button className='btn btn-success'>Ingresar</button>
                    </form>
                </div>
            </section>
            {/* Footer compartido */}
            <footer>
                <div className="footer-container">
                    <div className="footer-left">
                        <img src = "minagri.png" alt="MINAGRI logo" />
                    </div>
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
                                {/* Aquí puedes agregar los íconos de redes sociales */}
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

export default Login