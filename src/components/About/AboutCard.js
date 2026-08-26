import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola! Soy <span className="purple">Nathaly Salgado</span>{" "}
            Desarrolladora Frontend apasionada por  <span className="purple">crear interfaces funcionales, intuitivas y visualmente atractivas.</span>
            <br />
            A lo largo de mi trayectoria he trabajado como{" "}
            <span className="purple">Desarrolladora Frontend y Diseñadora UX/UI</span> en{" "}
            <span className="purple">en consultoras y empresas de tecnología como CSTI y Gestión Source</span>.
            <br />participando en proyectos para importantes instituciones del sector educativo como {" "}
            <span className="purple">UPC, UPN y UPCH, además de proyectos relacionados con salud y otros entornos empresariales. </span> Esta experiencia me ha permitido adaptarme a diferentes equipos, clientes y necesidades de negocio, trabajando de manera colaborativa con equipos de desarrollo, UX/UI y otras áreas.{" "}
          
            <br />
            <br />
            Fuera del código, disfruto de actividades que me permiten ser creativa y desconectarme un poco del trabajo:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Canto y música 🎤
            </li>
            <li className="about-activity">
              <ImPointRight /> Los gatos 🐱
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Crear, aprender y seguir creciendo."{" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
