import React, { useState } from 'react'
import './Portfolio.css';
import portfolioData from '../../helpers/portfolioData';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { gitHub } from '../../helpers/icons'


function Portfolio() {
    const [modalShow, setModalShow] = useState(false);
    const [tempData, setTempData] = useState({});


    // const handleClose = () => setModalShow(false);

    const createModal = (data) => {
        return (
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size='lg'
                arial-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {data.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{data.summary}</p>
                    <Image src={data.image} style={{ width: '200px' }} />
                </Modal.Body>
                <a id='portfolio__modal__link' href={data.link} target='_blank' rel='noreferrer'>Go to site</a>
                <a id='portfolio__modal__link' href={data.github_link} target='_blank' rel='noreferrer'>{gitHub}
                </a>
                <Modal.Footer>
                    <div>Technologies used: </div>
                    <p style={{ fontSize: '0.7rem', marginRight: 'auto' }}>{data.tech}</p>
                    <Button onClick={() => setModalShow(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }


    const mapped = portfolioData.map((e, index) => {
        return (
            <Card key={index} id="portfolio__card__container">
                <Image className="portfolio__image"
                    onClick={() => {
                        setTempData({
                            image: e.image,
                            link: e.link,
                            github_link: e.github_link,
                            title: e.title,
                            summary: e.summary,
                            tech: e.tech

                        })
                        setModalShow(true)
                    }}
                    src={e.image}
                />
                <div className="portfolio__click__info"></div>
                {createModal(tempData)}

            </Card >

        )
    })


    return (
        <div className='portfolio__main__container'>
            <div>
                <h1>Portfolio</h1>
            </div>
            <p>This is my GitHub page:
                <a href='https://github.com/elfsvet' target='_blank' rel='noreferrer'> https://github.com/elfsvet</a>
            </p>
            <p>This is my Resume:
                <a href='https://drive.google.com/file/d/1VryKuCQXRWMWMwWZnLS8ELwITgaUzyuP/view?usp=sharing' download target='_blank' rel='noreferrer'>Click to download</a>
            </p>
            <Container fluid="lg" style={{ padding: '2rem 0' }}>
                <Row>
                    {mapped}
                </Row>
            </Container>

        </div>
    );
}

export default Portfolio