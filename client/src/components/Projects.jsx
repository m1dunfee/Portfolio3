import "@fortawesome/fontawesome-free/css/all.min.css";
import { useCallback, useMemo, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Fade,
  Container,
  Row,
  Col,
} from "reactstrap";

// Expect each project to have a stable id.
// If you do not have one yet, add it in your data (recommended).
function getProjectId(project, index) {
  return project.id ?? project.slug ?? project.url ?? project.title ?? String(index);
}

export default function Projects({ projectList = [] }) {
  // active image index per project id, eg: { "portfolio": 2, "rsa": 0 }
  const [activeById, setActiveById] = useState({});

  const ids = useMemo(
    () => projectList.map((p, i) => getProjectId(p, i)),
    [projectList]
  );

  const getActiveIndex = useCallback(
    (id) => activeById[id] ?? 0,
    [activeById]
  );

  const step = useCallback((id, dir, imgCount) => {
    if (!imgCount || imgCount <= 1) return;

    setActiveById((prev) => {
      const current = prev[id] ?? 0;
      const next = (current + dir + imgCount) % imgCount; // circular
      return { ...prev, [id]: next };
    });
  }, []);

  return (
    <Container fluid id="Projects" className="cards-img-container">
      <Row>
        {projectList.map((project, index) => {
          const id = ids[index];
          const images = Array.isArray(project.img) ? project.img : [project.img].filter(Boolean);
          const imgCount = images.length;
          const active = getActiveIndex(id);
          const src = images[active];

          return (
            <Col md="4" className="py-3 d-flex justify-content-center" key={id}>
              <Card className="card-primary w-100">
                <div className="custom-slider card-img-container">
                  {/* Key forces remount so Fade "re-appears" when src changes */}
                  <Fade key={`${id}-${active}`} in={true}>
                    <img
                      src={src}
                      alt={`${project.title ?? "Project"} slide ${active + 1}`}
                      style={{ width: "100%", maxHeight: "200px", objectFit: "contain" }}
                      className="img-fluid"
                    />
                  </Fade>

                  <div className="slider-controls">
                    <Button
                      color="link"
                      className="slider-button p-0"
                      onClick={() => step(id, -1, imgCount)}
                      disabled={imgCount <= 1}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </Button>

                    <Button
                      color="link"
                      className="slider-button p-0"
                      onClick={() => step(id, +1, imgCount)}
                      disabled={imgCount <= 1}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </Button>
                  </div>
                </div>

                <CardBody>
                  <CardTitle tag="h5">{project.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {project.category}
                  </CardSubtitle>
                  <CardText>{project.details}</CardText>

                  {project.url ? (
                    <Button
                      outline
                      color="primary"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Project
                    </Button>
                  ) : null}
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
