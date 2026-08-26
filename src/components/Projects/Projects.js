import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import laptop from "../../Assets/Projects/laptop-bg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son algunos de los proyectos que he realizado
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laptop}
              isBlog={false}
              title="UPCH PORTAL DE NOTAS"
              description="HTML del registro de notas desde portal de docente"
              ghLink="https://nathsf.github.io/UPCH-PORTAL-NOTAS/"
              demoLink="https://nathsf.github.io/UPCH-PORTAL-NOTAS/"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="UPCH BACKOFFICE"
              description="HTML del portal administrativo BACKOFFICE para gestionar las maestras de otros portales del ecosistema educativo"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laptop}
              isBlog={false}
              title="UPCH PORTAL DE MATRÍCULA"
              description="HTML del portal dirigido a estudiantes para el registro de matrícula"
              ghLink="https://nathsf.github.io/UPCH-PORTAL-MATRICULA/views/login/index.html"
              demoLink="https://nathsf.github.io/UPCH-PORTAL-MATRICULA/views/login/index.html"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laptop}
              isBlog={false}
              title="TIGMED REGISTRO DE CITAS  - FIGMA"
              description="Diseño de casos de uso para el registro de citas para TIGMED para usuario CAJA"
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://www.figma.com/design/4JwED7zqQiy28roLyZgskn/Admisi%C3%B3n-y-citas---Tigmed--Copy-?node-id=1-2&t=nLW8NxZy0wjboLfD-1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laptop}
              isBlog={false}
              title="UPCH PORTAL DE NOTAS - FIGMA"
              description="Diseño de flujo de registro de notas desde portal de docente"
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.figma.com/design/YiKkNUHzbzPWCwtyHP6qqL/Registro---visualizaci%C3%B3n-de-notas?node-id=4-244&t=8qOmRQVbi1g2s6yi-1" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laptop}
              isBlog={false}
              title="ADEX DASHBOARD  - FIGMA"
              description="Diseño de Dashboard para filtrar estadisticas de estudiantes desertores"
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://www.figma.com/design/szcEqBV7l9n2emOLxKcKgX/ADEX?node-id=0-1&t=ouKq6LMPZKbH1QO2-1"  
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
