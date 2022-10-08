import { useState } from 'react';
import './Portfolio.css';
import portfolioData from '../../helpers/portfolioData';
import {
  Container,
  Row,
  Card,
  Image,
  Modal,
  Button,
  Col,
} from 'react-bootstrap';
import { gitHub } from '../../helpers/icons';
import pdf from '../../resume/resume.pdf';

function Portfolio() {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({});

  const createModal = (data) => {
    return (
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size='lg'
        arial-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header style={{ border: 'none' }}>
          <Modal.Title id='contained-modal-title-vcenter'>
            {data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <p>{data.summary}</p>
          </Row>
          <Row className="justify-content-md-center">
            <Image src={data.image} style={{ maxWidth: '600px' }} />
          </Row>
        </Modal.Body>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop:'2rem'
          }}
        >
          <span>
            <Button
              // size='lg'
              href={data.link}
              target='_blank'
              variant='dark'
              style={{
                maxWidth: '150px',
                margin: '5px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Go to Web Site
            </Button>
          </span>
          <span>
            <Button
              // size='lg'
              href={data.github_link}
              target='_blank'
              variant='dark'
              style={{
                margin: '5px',
                height: '50px',
                width: '150px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {gitHub}
            </Button>
          </span>
        </div>

        <Modal.Footer style={{ border: 'none' }}>
          <p>Technologies used: </p>
          <p style={{ fontSize: '0.75rem', marginRight: 'auto' }}>
            {data.tech}
          </p>
          <Button variant='danger' onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const mapped = portfolioData.map((e, index) => {
    return (
      <Card key={index} id='portfolio__card__container'>
        <Image
          className='portfolio__image'
          onClick={() => {
            setTempData({
              image: e.image,
              link: e.link,
              github_link: e.github_link,
              title: e.title,
              summary: e.summary,
              tech: e.tech,
            });
            setModalShow(true);
          }}
          src={e.image}
        />
        <div className='portfolio__click__info'></div>
        {createModal(tempData)}
      </Card>
    );
  });

  return (
    <div className='mainContainer'>
      <div>
        <h1>Portfolio</h1>
      </div>
      <div className='buttonHolder'>
        This is my GitHub page:
        <Button
          href='https://github.com/elfsvet'
          target='_blank'
          className='blackButton'
          variant='dark'
        >
          {gitHub}
        </Button>
      </div>
      <div className='buttonHolder'>
        This is my Resume:
        <Button
          href={pdf}
          target='_blank'
          variant='dark'
          className='blackButton'
          // maxWidth='150px'
        >
          Download
        </Button>
      </div>

      <Container fluid='lg' style={{ padding: '2rem 0' }}>
        <Row>{mapped}</Row>
      </Container>
    </div>
  );
}

export default Portfolio;
