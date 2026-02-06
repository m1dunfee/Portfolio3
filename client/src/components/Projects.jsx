import MetadataDropdown from './MetadataDropdown';
import { useCallback, useState } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Fade,
  Container,
  Row,
  Col,
} from 'reactstrap';
import { useCollection } from '../hooks/useCollection';
import { useSearchParams } from 'react-router-dom';

function nextIndex(current, dir, count) {
  if (!count || count <= 1) return 0;
  return (current + dir + count) % count;
}

export default function Projects() {
  const [sp, setSp] = useSearchParams();

  const tagKey = sp.get('tagKey') || undefined;
  const tagValue = sp.get('tagValue') || undefined;

  const { items, loading, error } = useCollection('projects', {
    tagKey,
    tagValue,
  });

  // active image index per project id
  const [activeById, setActiveById] = useState({});

  const getActiveIndex = useCallback((id) => activeById[id] ?? 0, [activeById]);

  const step = useCallback((id, dir, imgCount) => {
    setActiveById((prev) => {
      const current = prev[id] ?? 0;
      const next = nextIndex(current, dir, imgCount);
      return { ...prev, [id]: next };
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {String(error.message || error)}</div>;

  const projects = Array.isArray(items) ? items : (items?.projects ?? []);

  return (
    <Container fluid id='Projects' className='cards-img-container'>
      {/* style to the right && updates the props */}
      <MetadataDropdown
        collection="projects"
        onSelect={({ group, tag }) => {
          const next = new URLSearchParams(sp);
          next.set('tagKey', group);
          next.set('tagValue', tag);
          // optional: reset paging if you later add page
          next.delete('page');
          setSp(next);
        }}
      />
      <Row>
        {projects.map((project) => {
          const id = project.slug ?? project._id;

          const images = project.images ?? [];
          const imgCount = images.length;

          const active = getActiveIndex(id);
          const img = images[active] ?? null;

          const src = img?.src ?? null;
          const alt =
            img?.alt ?? project.metadata?.title ?? project.title ?? 'Project';

          return (
            <Col md='4' className='py-3 d-flex justify-content-center' key={id}>
              <Card className='card-primary w-100'>
                <div className='custom-slider card-img-container'>
                  {src ? (
                    <Fade key={`${id}-${active}`} in={true}>
                      <img
                        src={src}
                        alt={alt}
                        style={{
                          width: '100%',
                          maxHeight: '200px',
                          objectFit: 'contain',
                        }}
                        className='img-fluid'
                      />
                    </Fade>
                  ) : (
                    <div style={{ height: '200px' }} />
                  )}

                  <div className='slider-controls'>
                    <Button
                      color='link'
                      className='slider-button p-0'
                      onClick={() => step(id, -1, imgCount)}
                      disabled={imgCount <= 1}
                    >
                      <i className='fas fa-chevron-left'></i>
                    </Button>

                    <Button
                      color='link'
                      className='slider-button p-0'
                      onClick={() => step(id, +1, imgCount)}
                      disabled={imgCount <= 1}
                    >
                      <i className='fas fa-chevron-right'></i>
                    </Button>
                  </div>
                </div>

                <CardBody>
                  <CardTitle tag='h4'>
                    {project.metadata?.title ?? project.title}
                  </CardTitle>

                  <CardSubtitle className='mb-2'>
                    <p>{project.summary ?? ''}</p>
                  </CardSubtitle>

                  {project.metadata?.url ? (
                    <Button
                      outline
                      color='primary'
                      href={project.metadata.url}
                      target='_blank'
                      rel='noopener noreferrer'
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
