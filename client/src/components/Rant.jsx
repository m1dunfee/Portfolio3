import { Container, Row, Col, Card } from 'reactstrap';
import { useCollection } from '../hooks/useCollection';
import { useSearchParams } from 'react-router-dom';

export default function Rant({ collection }) {
  const [sp] = useSearchParams();

  const tagKey = sp.get('tagKey') || undefined;
  const tagValue = sp.get('tagValue') || undefined;

  const { items, loading, error } = useCollection(collection, {tagKey, tagValue});

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {String(error.message || error)}</div>;

  // need to double check it cant cameback null be for removing 
  const data = Array.isArray(items) ? items : [];

  const TextCard = (content) => (
    <Col xs='12' md='8' className='d-flex'>
      <Card className='flex-wrap card card-primary flex-fill'>
        <h1 className='text-center'>{content.metadata?.title ?? content.title}</h1>
        <hr />
        {(content.blocks ?? []).map((block, i) => (
          <p key={`${content.slug ?? content._id}-block-${block.pos ?? i}`}>{block.text}</p>
        ))}
        <hr />
      </Card>
    </Col>
  );

  const ImageCard = (content) => {
    // images are array of objects: [{ src, alt, pos }]
    const img = (content.images ?? [])[0] ?? null;
    const src = img?.src ?? null;
    const alt = img?.alt ?? content.metadata?.title ?? content.title ?? 'Image';

    return (
      <Col xs='12' md='4' className='d-flex'>
        <Card className='flex-wrap card card-primary flex-fill d-none d-md-block'>
          {src ? (
            <img
              src={src}
              alt={alt}
              style={{ width: '100%' }}
              className='card-img responsive-img'
            />
          ) : null}
        </Card>
      </Col>
    );
  };

  return (
    <Container fluid className='px-0 cards-container' id='ProspectsDynamicTest'>
      {data.map((context, index) => (
        <Row key={context.slug ?? context._id} className='d-flex align-items-stretch py-3'>
          {index % 2 === 0 ? (
            <>
              {TextCard(context)}
              {ImageCard(context)}
            </>
          ) : (
            <>
              {ImageCard(context)}
              {TextCard(context)}
            </>
          )}
        </Row>
      ))}
    </Container>
  );
}
