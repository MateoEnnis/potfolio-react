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
  const [idioma, setIdioma] = useState('es');

  const textos = {
    es: {
      inicio: 'Inicio',
      tecnologias: 'Tecnologías',
      proyectos: 'Proyectos',
      sobreMi: 'Sobre mí',
      certificaciones: 'Certificaciones',
      contacto: 'Contacto',
      verTec: 'Ver tecnologías',
      h1: 'Mateo Ennis',
      h2: 'Desarrollador Web Full Stack',
      typewriter: ['Transformo ideas en código.', 'Diseño experiencias web.', 'Construyo soluciones full stack.'],
      mensajeOk: '✅ Mensaje enviado correctamente.',
      mensajeError: '❌ Ocurrió un error al enviar el mensaje. Intentá de nuevo.',
      proyectos: "Mis proyectos",
    ecommerceTitulo: "E-commerce Full Stack",
    ecommerceDescripcion: "Tienda online con React, Node.js y MongoDB. Carrito, login y panel admin.",
    tareasTitulo: "Gestor de Tareas",
    tareasDescripcion: "CRUD completo con React + Express + Mongo. Gestión de tareas por usuario.",
    verDemo: "Ver demo",
    verCodigo: "Ver código",
      certificaciones: "Certificaciones",
    fullStackTitulo: "Desarrollador Web Full Stack",
    fullStackInstitucion: "Educación IT (Argentina)",
    inglesTitulo: "Inglés Técnico",
    inglesInstitucion: "Coderhouse",
    liderazgoTitulo: "Liderazgo de equipos ágiles",
    liderazgoInstitucion: "Educación IT",
    verDiploma: "Ver diploma",
      nombre: 'Tu nombre',
      email: 'Tu email',
      mensaje: 'Tu mensaje',
      enviar: 'Enviar mensaje',
      enviando: 'Enviando...',
      verDemo: 'Ver demo',
      verCodigo: 'Ver código',
      cert: 'Certificaciones',
      footer: '© 2025 Mateo Ennis. Todos los derechos reservados.',
      tecnologias: "Tecnologías que uso",
      sobreMi: "Sobre mí",
      sobreMiContenido: [
      "Soy Mateo Ennis, desarrollador web full stack con formación técnica y experiencia en logística.",
      "Me apasiona crear aplicaciones modernas y funcionales, tanto del lado del cliente como del servidor.",
      "Actualmente me especializo en React, Node.js y MongoDB, y sigo perfeccionándome con proyectos personales, cursos y desafíos prácticos."
    ]
    },
    en: {
      inicio: 'Home',
      tecnologias: 'Technologies',
      proyectos: 'Projects',
      sobreMi: 'About me',
      certificaciones: 'Certifications',
      contacto: 'Contact',
      verTec: 'View technologies',
      h1: 'Mateo Ennis',
      h2: 'Full Stack Web Developer',
      typewriter: ['I turn ideas into code.', 'I design web experiences.', 'I build full stack solutions.'],
      mensajeOk: '✅ Message sent successfully.',
      mensajeError: '❌ Error sending message. Try again.',
      proyectos: "My Projects",
    ecommerceTitulo: "Full Stack E-commerce",
    ecommerceDescripcion: "Online store built with React, Node.js and MongoDB. Cart, login and admin panel.",
    tareasTitulo: "Task Manager",
    tareasDescripcion: "Full CRUD app with React + Express + Mongo. Task management per user.",
    verDemo: "Live demo",
    verCodigo: "Source code",
    certificaciones: "Certifications",
    fullStackTitulo: "Full Stack Web Developer",
    fullStackInstitucion: "Educación IT (Argentina)",
    inglesTitulo: "Technical English",
    inglesInstitucion: "Coderhouse",
    liderazgoTitulo: "Agile Team Leadership",
    liderazgoInstitucion: "Educación IT",
    verDiploma: "View certificate",
      tecnologias: "Technologies I use",
      nombre: 'Your name',
      email: 'Your email',
      mensaje: 'Your message',
      enviar: 'Send message',
      enviando: 'Sending...',
      verDemo: 'View demo',
      verCodigo: 'View code',
      cert: 'Certifications',
      footer: '© 2025 Mateo Ennis. All rights reserved.',
      sobreMi: "About me",
      sobreMiContenido: [
      "I'm Mateo Ennis, a full stack web developer with technical training and experience in logistics.",
      "I'm passionate about building modern, functional applications, both client-side and server-side.",
      "I specialize in React, Node.js, and MongoDB, and I’m continuously improving through personal projects, courses, and coding challenges."
    ]
    },
    fr: {
      inicio: 'Accueil',
      tecnologias: 'Technologies',
      proyectos: 'Projets',
      sobreMi: 'À propos',
      certificaciones: 'Certifications',
      contacto: 'Contact',
      verTec: 'Voir les technologies',
      h1: 'Mateo Ennis',
      h2: 'Développeur Web Full Stack',
      typewriter: ['Je transforme des idées en code.', 'Je conçois des expériences web.', 'Je construis des solutions full stack.'],
      mensajeOk: '✅ Message envoyé avec succès.',
      mensajeError: '❌ Erreur lors de l’envoi. Réessayez.',
      tecnologias: "Technologies que j'utilise",
      proyectos: "Mes projets",
    ecommerceTitulo: "E-commerce Full Stack",
    ecommerceDescripcion: "Boutique en ligne avec React, Node.js et MongoDB. Panier, connexion et panneau admin.",
    tareasTitulo: "Gestionnaire de Tâches",
    tareasDescripcion: "Application CRUD complète avec React + Express + Mongo. Gestion des tâches par utilisateur.",
    verDemo: "Voir la démo",
    verCodigo: "Voir le code",
    certificaciones: "Certifications",
    fullStackTitulo: "Développeur Web Full Stack",
    fullStackInstitucion: "Educación IT (Argentine)",
    inglesTitulo: "Anglais Technique",
    inglesInstitucion: "Coderhouse",
    liderazgoTitulo: "Leadership d'équipes agiles",
    liderazgoInstitucion: "Educación IT",
    verDiploma: "Voir le diplôme",
      nombre: 'Votre nom',
      email: 'Votre email',
      mensaje: 'Votre message',
      enviar: 'Envoyer le message',
      enviando: 'Envoi...',
      verDemo: 'Voir démo',
      verCodigo: 'Voir code',
      cert: 'Certifications',
      footer: '© 2025 Mateo Ennis. Tous droits réservés.',
      sobreMi: "À propos de moi",
      sobreMiContenido: [
      "Je suis Mateo Ennis, développeur web full stack avec une formation technique et une expérience en logistique.",
      "Je suis passionné par la création d'applications modernes et fonctionnelles, côté client comme côté serveur.",
      "Je me spécialise dans React, Node.js et MongoDB, et je continue à me perfectionner grâce à des projets personnels, des cours et des défis techniques."
    ]
    },
  };

  const t = textos[idioma];

  const sendEmail = (e) => {
    e.preventDefault();
    setEnviando(true);
    setMensaje('');

    emailjs.sendForm('service_n0t88pi', 'template_i0gh95p', form.current, '5Aq4uRTTQmQtrP5Af')
      .then(() => {
        setMensaje(t.mensajeOk);
        form.current.reset();
      })
      .catch(() => {
        setMensaje(t.mensajeError);
      })
      .finally(() => {
        setEnviando(false);
      });
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">{t.h1}</div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="hamburguesa">&#9776;</label>
          <ul className="navbar-links" onClick={() => document.getElementById('menu-toggle').checked = false}>
            <li><a href="#inicio">{t.inicio}</a></li>
            <li><a href="#tecnologias">{t.tecnologias}</a></li>
            <li><a href="#proyectos">{t.proyectos}</a></li>
            <li><a href="#sobre-mi">{t.sobreMi}</a></li>
            <li><a href="#certificaciones">{t.certificaciones}</a></li>
            <li><a href="#contacto">{t.contacto}</a></li>
          </ul>
          <select className="selector-idioma" value={idioma} onChange={(e) => setIdioma(e.target.value)}>
            <option value="es">🇪🇸</option>
            <option value="en">🇬🇧</option>
            <option value="fr">🇫🇷</option>
          </select>
        </div>
      </nav>

      <header className="hero" id="inicio">
        <h1>{t.h1}</h1>
        <h2>{t.h2}</h2>
        <p className="typewriter">
          <Typewriter
            words={t.typewriter}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </p>
        <a href="#tecnologias" className="btn-hero">{t.verTec}</a>
      </header>

   <section className="tecnologias seccion-animada" id="tecnologias">
  <h3>{t.tecnologias}</h3>
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
  <h3>{t.proyectos}</h3>
  <div className="lista-proyectos">
    <div className="tarjeta-proyecto">
      <img src="/img/captura.jpeg.jpeg" alt="Proyecto Ecommerce" />
      <h4>{t.ecommerceTitulo}</h4>
      <p>{t.ecommerceDescripcion}</p>
      <div className="botones-proyecto">
        <a href="https://ecommerceintegrador.netlify.app/" target="_blank" rel="noreferrer">{t.verDemo}</a>
        <a href="https://github.com/MateoEnnis/ecommerce-react" target="_blank" rel="noreferrer">{t.verCodigo}</a>
      </div>
    </div>

    <div className="tarjeta-proyecto">
      <img src="/img/Task-app.jpeg" alt="Proyecto Task Manager" />
      <h4>{t.tareasTitulo}</h4>
      <p>{t.tareasDescripcion}</p>
      <div className="botones-proyecto">
        <a href="https://task-app-42.netlify.app/" target="_blank" rel="noreferrer">{t.verDemo}</a>
        <a href="https://github.com/MateoEnnis/Task-app.git" target="_blank" rel="noreferrer">{t.verCodigo}</a>
      </div>
    </div>
  </div>
</section>


      <section className="sobre-mi seccion-animada" id="sobre-mi">
  <h3>{t.sobreMi}</h3>
  <div className="contenido-sobre-mi">
    {t.sobreMiContenido.map((parrafo, index) => (
      <p key={index}>{parrafo}</p>
    ))}
  </div>
</section>


<section className="certificaciones" id="certificaciones">
  <h3>Certificaciones</h3>
  <div className="lista-certificaciones">
    <div className="tarjeta-certificacion">
      <img src="/img/Certificado-Full-Stack.png" alt="Diploma Educación IT" />
      <h4>Desarrollador Web Full Stack</h4>
      <p>Educación IT</p>
      <a href="https://drive.google.com/file/d/1MUOGeaJC2KSgeCvceTVIBZAjnQalTdyb/view?usp=sharing" target="_blank" rel="noreferrer">Ver diploma</a>
    </div>
    <div className="tarjeta-certificacion">
      <img src="/img/Inglés-técnico.png" alt="Diploma Educación IT" />
      <h4>Inglés Técnico</h4>
      <p>Coderhouse</p>
      <a href="https://drive.google.com/file/d/1FUe_SO1sVvmAhZdj_WhCzAHBE4wSgcGq/view?usp=sharing" target="_blank" rel="noreferrer">Ver diploma</a>
    </div>
    <div className="tarjeta-certificacion">
      <img src="/img/Certificado-Liderazgo-para-Equipos-Agiles.png" alt="Diploma Educación IT" />
      <h4>Liderazgo de equipos ágiles</h4>
      <p>Educación IT</p>
      <a href="https://drive.google.com/file/d/1OB0kr1eL_YR4sL6lVe5xExcFPZ0lH2ci/view?usp=drive_link" target="_blank" rel="noreferrer">Ver diploma</a>
    </div>
    <div className="tarjeta-certificacion">
      <img src="/img/Inteligencia-artificial-para-la-productividad.jpeg" alt="Diploma Educación IT" />
      <h4>Inteligencia Artificial Para La Productividad</h4>
      <p>EGG</p>
      <a href="https://drive.google.com/file/d/1qTRwiPGaMzZt9ZAWE3VrtMiS57PtkrBx/view?usp=drive_link" target="_blank" rel="noreferrer">Ver diploma</a>
    </div>
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
      </section>

      <a href="#inicio" className="boton-ir-arriba" title="Volver arriba">↑</a>

      <footer className="footer">
        <div className="redes">
          <a href="https://github.com/MateoEnnis" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/mateo-ennis-b80465179" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:mateoennis777@gmail.com">mateoennis777@gmail.com</a>
        </div>
        <p>{t.footer}</p>
      </footer>

      <a href="#inicio" className="boton-ir-arriba" title="Volver arriba">↑</a>
    </div>
  );
}

export default App;