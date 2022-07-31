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
import pdf from '../../resume/resume.pdf'

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
                {/* <a id='portfolio__modal__link' href={data.link} target='_blank' rel='noreferrer'>Go to site</a> */}
                <Button
                    // id='portfolio__modal__link'
                    href={data.link}
                    target="_blank"
                    style={{ maxWidth: "150px", background: "#22262a", margin: "5px", borderColor: 'black' }}
                >
                    Go to Web Site
                </Button>
                {/* <a id='portfolio__modal__link' href={data.github_link} target='_blank' rel='noreferrer' style={{ textDecoration: 'none', color: 'black'}}>{gitHub}
                </a> */}
                <Button
                    // id='portfolio__modal__link'
                    href={data.github_link}
                    target="_blank"
                    style={{ maxWidth: "150px", background: "#22262a", margin: "5px", borderColor: 'black' }}
                >
                    {gitHub}
                </Button>

                <Modal.Footer>
                    <div>Technologies used: </div>
                    <p style={{ fontSize: '0.7rem', marginRight: 'auto' }}>{data.tech}</p>
                    <Button variant="danger" onClick={() => setModalShow(false)}>Close</Button>
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
                {/* <a href='https://github.com/elfsvet' target='_blank' rel='noreferrer' style={{ color: 'black'}}>{gitHub}</a> */}
                <Button
                    href='https://github.com/elfsvet'
                    target="_blank"
                    style={{ maxWidth: "250px", background: "#22262a", marginLeft: "5px", borderColor: 'black' }}
                >
                    {gitHub}
                </Button>
            </p>
            <p>This is my Resume:
                {/* <a href='https://drive.google.com/file/d/1g6udu4nXU3FyW0A51srYq9oXcj79V0D3/view?usp=sharing' download target='_blank' rel='noreferrer'>Click to download</a> */}
                <Button
                    href={pdf}
                    target="_blank"
                    style={{ maxWidth: "250px", background: "#22262a", marginLeft: "5px", borderColor: 'black' }}
                >
                    Download
                </Button>
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