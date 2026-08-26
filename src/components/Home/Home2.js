import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Conoce mi  <span className="purple"> perfil profesional </span>
            </h1>
            <p className="home-about-body">
              Soy Desarrolladora Frontend con más de 7 años de experiencia profesional en el desarrollo y mantenimiento de aplicaciones web para entornos empresariales, educativos y de salud.
              <br />
              <br />
              Me especializo en
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, React.js y Angular,{" "}
                </b>
              </i>
               con enfoque en la creación de interfaces responsivas, mantenibles, intuitivas y orientadas a una buena experiencia de usuario.
              <br />
              <br />
             A lo largo de mi trayectoria he trabajado en 
              <i>
                <b className="purple">
                  {" "}
                  plataformas académicas, sistemas ERP, aplicaciones para el sector salud y sitios web comerciales, {" "}
                </b>
              </i>
               colaborando con equipos de backend, UX/UI, QA y negocio.
              <br />
              <br />
              Me interesa seguir aprendiendo nuevas tecnologías, mejorar continuamente mis habilidades y crear soluciones web que combinen una buena experiencia de usuario con una base técnica sólida.
              {/* <b className="purple"> Node.js </b> -{" "}
              <i>
                <b className="purple">React.js</b> -{" "}
                <b className="purple">Next.js</b>.
              </i> */}
            </p>
          </Col>
          {/* <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
