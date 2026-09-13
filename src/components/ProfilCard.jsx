import { useState } from "react";
import profilImage from "../assets/images/profil.jpg";

import { FaGithub, FaMoon, FaSun, FaArrowRight } from "react-icons/fa";

function ProfilCard() {
  // false = coordonnées cachées
  // true = coordonnées affichées
  const [showContact, setShowContact] = useState(false);

  // false = mode clair
  // true = mode sombre
  const [darkMode, setDarkMode] = useState(false);

  // false = projets cachés
  // true = projets affichés
  const [showProjects, setShowProjects] = useState(false);

  // Permet de savoir si l'email vient d'être copié
  const [emailCopied, setEmailCopied] = useState(false);

  // Fonction appelée quand on clique sur "Copier l'email"
  function copyEmail() {
    // Copie l'adresse dans le presse-papiers
    navigator.clipboard.writeText("abderrahmane.malik.contact@gmail.com");

    // On indique à React que l'email a été copié
    setEmailCopied(true);

    // Après 2 secondes, on remet le bouton dans son état normal
    setTimeout(() => {
      setEmailCopied(false);
    }, 2000);
  }
  return (
    <div className={`page ${darkMode ? "dark-page" : ""}`}>
      <article
        className={`profile-card 
    ${darkMode ? "dark" : ""} 
    ${showProjects ? "projects-open" : ""}
  `}
      >
        {" "}
        {/* Bouton mode clair / sombre */}
        <button
          className="theme-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Changer le thème"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        {/* Photo */}
        <img
          className="profile-card__image"
          src={profilImage}
          alt="Portrait de profil"
        />
        {/* Informations principales */}
        <h1>Abderrahmane ACHOU</h1>
        <h2>Développeur web junior</h2>
        <p className="profile-card__location">Niort, France</p>
        <p className="profile-card__status">
          Disponible pour de nouvelles opportunités
        </p>
        {/* Compétences */}
        <div className="skills">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Git</span>
          <span>PHP</span>
          <span>Symfony</span>
        </div>
        {/* Présentation */}
        <p className="profile-card__description">
          Développeur web junior, je développe actuellement mes compétences en
          JavaScript et React à travers des projets personnels orientés
          interfaces modernes et responsive.
        </p>
        {/* Bouton projets */}
        <button
          className="projects-button"
          onClick={() => setShowProjects(!showProjects)}
        >
          {showProjects ? "Masquer mes projets" : "Voir mes projets"}

          <FaArrowRight
            className={`projects-button__icon ${showProjects ? "rotate" : ""}`}
          />
        </button>
        {/* Projets */}
        {showProjects && (
          <div className="projects">
            {/* Projet React */}
            <div className="project-card">
              <div className="project-card__content">
                <strong>Carte de visite React</strong>

                <span>React</span>

                <p>Mini-projet React.</p>
              </div>

              <a
                href="https://github.com/Abde-Tech/Jeu-Mario"
                target="_blank"
                rel="noreferrer"
                className="github-project-button"
              >
                <FaGithub size={20} />
                Voir le code
              </a>
            </div>

            {/* Projet Java */}
            <div className="project-card">
              <div className="project-card__content">
                <strong>Mario Project</strong>

                <span>Java</span>

                <p>
                  Mini-projet inspiré de Mario réalisé pour pratiquer Java et
                  les interactions utilisateur.
                </p>
              </div>

              <a
                href="https://github.com/Abde-Tech/Jeu-Mario"
                target="_blank"
                rel="noreferrer"
                className="github-project-button"
              >
                <FaGithub size={20} />
                Voir le code
              </a>
            </div>
          </div>
        )}
        {/* Bouton contact */}
        <button
          className="contact-button"
          onClick={() => setShowContact(!showContact)}
        >
          {showContact ? "Masquer mes coordonnées" : "Me contacter"}
        </button>
        {/* Coordonnées */}
        {showContact && (
          <div className="contact-info">
            <p>abderrahmane.malik.contact@gmail.com</p>

            {/* Quand on clique, l'adresse mail est copiée */}
            <button
              className={`copy-button ${emailCopied ? "copied" : ""}`}
              onClick={copyEmail}
            >
              {emailCopied ? "✓ Email copié !" : "Copier l'email"}
            </button>
          </div>
        )}
      </article>
    </div>
  );
}

export default ProfilCard;
