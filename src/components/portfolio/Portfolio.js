import React, { useState } from 'react';
import './Portfolio.css';
import portfolioData from '../../helpers/portfolioData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
            {data.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{data.summary}</p>
          <Image src={data.image} style={{ width: '200px' }} />
        </Modal.Body>
        <Button
          href={data.link}
          target='_blank'
          style={{
            maxWidth: '150px',
            background: '#22262a',
            margin: '5px',
            borderColor: 'black',
          }}
        >
          Go to Web Site
        </Button>
        <Button
          href={data.github_link}
          target='_blank'
          style={{
            maxWidth: '150px',
            background: '#22262a',
            margin: '5px',
            borderColor: 'black',
          }}
        >
          {gitHub}
        </Button>

        <Modal.Footer>
          <div>Technologies used: </div>
          <p style={{ fontSize: '0.7rem', marginRight: 'auto' }}>{data.tech}</p>
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
    <div className='portfolio__main__container'>
      <div>
        <h1>Portfolio</h1>
      </div>
      <p>
        This is my GitHub page:
        <Button
          href='https://github.com/elfsvet'
          target='_blank'
          style={{
            maxWidth: '250px',
            background: '#22262a',
            marginLeft: '5px',
            borderColor: 'black',
          }}
        >
          {gitHub}
        </Button>
      </p>
      <p>
        This is my Resume:
        <Button
          href={pdf}
          target='_blank'
          style={{
            maxWidth: '250px',
            background: '#22262a',
            marginLeft: '5px',
            borderColor: 'black',
          }}
        >
          Download
        </Button>
      </p>

      <Container fluid='lg' style={{ padding: '2rem 0' }}>
        <Row>{mapped}</Row>
      </Container>
    </div>
  );
}

export default Portfolio;
