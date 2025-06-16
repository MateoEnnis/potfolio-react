import './App.css';
import { useRef, useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNode, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import emailjs from 'emailjs-com';

function App() {
  const form = useRef();
  const [mensaje, setMensaje] = useState('');
  const [enviando, setEnviando] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje('');

    emailjs.sendForm('service_n0t88pi', 'template_i0gh95p', form.current, '5Aq4uRTTQmQtrP5Af')
      .then(() => {
        setMensaje('✅ Mensaje enviado correctamente.');
        form.current.reset();
      })
      .catch(() => {
        setMensaje('❌ Ocurrió un error al enviar el mensaje. Intentá de nuevo.');
      })
      .finally(() => {
        setEnviando(false);
      });
  };

  return (
    <div className="App">
      <nav className="navbar">
  <div className="navbar-container">
    <div className="navbar-logo">Mateo Ennis</div>

    <input type="checkbox" id="menu-toggle" />
    <label htmlFor="menu-toggle" className="hamburguesa">&#9776;</label>

    <ul className="navbar-links" onClick={() => document.getElementById('menu-toggle').checked = false}>
      <li><a href="#inicio">Inicio</a></li>
      <li><a href="#tecnologias">Tecnologías</a></li>
      <li><a href="#proyectos">Proyectos</a></li>
      <li><a href="#sobre-mi">Sobre mí</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </div>
</nav>

      <header className="hero" id="inicio">
        <h1>Mateo Ennis</h1>
        <h2>Desarrollador Web Full Stack</h2>
        <p className="typewriter">
          <Typewriter
            words={[
              'Transformo ideas en código.',
              'Diseño experiencias web.',
              'Construyo soluciones full stack.'
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <a href="#tecnologias" className="btn-hero">Ver tecnologías</a>
      </header>

      <section className="tecnologias seccion-animada" id="tecnologias">
        <h3>Tecnologías que uso</h3>
        <div className="iconos-tecnologias">
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJsSquare title="JavaScript" />
          <FaReact title="React" />
          <FaNode title="Node.js" />
          <SiMongodb title="MongoDB" />
          <FaGitAlt title="Git" />
          <FaGithub title="GitHub" />
        </div>
      </section>

      <section className="proyectos seccion-animada" id="proyectos">
        <h3>Mis proyectos</h3>
        <div className="lista-proyectos">
          <div className="tarjeta-proyecto">
            <img src="https://via.placeholder.com/300x180.png?text=E-commerce+React" alt="Proyecto Ecommerce" />
            <h4>E-commerce Full Stack</h4>
            <p>Tienda online con React, Node.js y MongoDB. Carrito, login y panel admin.</p>
            <div className="botones-proyecto">
              <a href="https://ecommerceintegrador.netlify.app/" target="_blank" rel="noreferrer">Ver demo</a>
              <a href="https://github.com/MateoEnnis/ecommerce-react" target="_blank" rel="noreferrer">Ver código</a>
            </div>
          </div>
          <div className="tarjeta-proyecto">
            <img src="https://via.placeholder.com/300x180.png?text=Task+Manager" alt="Proyecto Task Manager" />
            <h4>Gestor de Tareas</h4>
            <p>CRUD completo con React + Express + Mongo. Gestión de tareas por usuario.</p>
            <div className="botones-proyecto">
              <a href="#" target="_blank" rel="noreferrer">Ver demo</a>
              <a href="#" target="_blank" rel="noreferrer">Ver código</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sobre-mi seccion-animada" id="sobre-mi">
        <h3>Sobre mí</h3>
        <div className="contenido-sobre-mi">
          <p>
            Soy Mateo Ennis, desarrollador web full stack con formación técnica y experiencia en logística.
            Me apasiona crear aplicaciones modernas y funcionales, tanto del lado del cliente como del servidor.
          </p>
          <p>
            Luego de varios años liderando procesos en el sector salud, decidí reinventarme en el mundo IT,
            combinando lógica, diseño y tecnología para resolver problemas reales.
          </p>
          <p>
            Actualmente me especializo en React, Node.js y MongoDB, y sigo perfeccionándome con proyectos personales,
            cursos y desafíos prácticos.
          </p>
        </div>
      </section>

      <section className="contacto seccion-animada" id="contacto">
        <h3>Contacto</h3>
        <form ref={form} className="formulario-contacto" onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Tu nombre" required />
          <input type="email" name="user_email" placeholder="Tu email" required />
          <textarea name="message" placeholder="Tu mensaje" required />
          <button type="submit" disabled={enviando}>
            {enviando ? 'Enviando...' : 'Enviar mensaje'}
          </button>
          {mensaje && <p className="mensaje-formulario">{mensaje}</p>}
        </form>
        <div className="redes">
          <a href="https://github.com/MateoEnnis" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/mateo-ennis-b80465179" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:mateoennis777@gmail.com">mateoennis777@gmail.com</a>
        </div>
      </section>

      <a href="#inicio" className="boton-ir-arriba" title="Volver arriba">↑</a>
    </div>
  );
}

export default App;
