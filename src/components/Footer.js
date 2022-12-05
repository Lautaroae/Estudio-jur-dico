import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaBalanceScale } from "react-icons/fa";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Acordate que tu consulta no molesta.
        </p>
        <p className="footer-subscription-text">
          Me podes encontrar en cualquierea de mis redes.
        </p>
        {/* <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="footer-input"
            />
            <Button ButtonStyle="btn--outline">subscribe</Button>
          </form>
        </div> */}
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Contacto</h2>
            <Link to="/product">Whats App</Link>
            <Link to="/product">Gmail</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Mis redes</h2>
            <Link to="/product">Instagram</Link>
            <Link to="/product">Facebook</Link>
            <Link to="/product">Linkedin</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/home" className="social-logo">
              Estudio Juridico <FaBalanceScale className="navbar-icon" />
            </Link>
          </div>
          <small className="website-rights">Estudio Juridico © 2022</small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <BsFacebook />
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <BsInstagram />
            </Link>
            <Link
              className="social-icon-link linkedin"
              to="/"
              target="_blank"
              aria-label="Linkedin"
            >
              <BsLinkedin />
            </Link>
            <Link
              className="social-icon-link whatsapp"
              to="/"
              target="_blank"
              aria-label="Whatsapp"
            >
              <BsWhatsapp />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
