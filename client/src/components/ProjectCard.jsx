import "@fortawesome/fontawesome-free/css/all.min.css";
import { useCallback, useMemo, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Fade } from "reactstrap";

export default function ProjectCard({ project }) {
  const images = useMemo(() => {
    if (Array.isArray(project.img)) return project.img;
    if (typeof project.img === "string" && project.img.length > 0) return [project.img];
    return [];
  }, [project.img]);

  const imgCount = images.length;
  const [active, setActive] = useState(0);

  const step = useCallback(
    (dir) => {
      if (imgCount <= 1) return;
      setActive((prev) => (prev + dir + imgCount) % imgCount);
    },
    [imgCount]
  );

  const src = images[active];

  return (
    <Card className="card-primary w-100">
      <div className="custom-slider card-img-container">
        <Fade key={`${project.id ?? project.title}-${active}`} in={true}>
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
            onClick={() => step(-1)}
            disabled={imgCount <= 1}
          >
            <i className="fas fa-chevron-left"></i>
          </Button>

          <Button
            color="link"
            className="slider-button p-0"
            onClick={() => step(1)}
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
          <Button outline color="primary" href={project.url} target="_blank" rel="noopener noreferrer">
            Visit Project
          </Button>
        ) : null}
      </CardBody>
    </Card>
  );
}
