
import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/BigStar.png'
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import API_URL from '../test'
import CreateOrder from "../components/modals/CreateOrder";


const AboutPage = () => {
    const [device, setDevice] = useState({info: []})
    const [orderVisible, setOrderVisible] = useState(false);
    const {id} = useParams()
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [id])




    return (
        <Container className="mt-3 ">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center ">
                        <h2>{device.name}</h2>

                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button  onClick={()=>setOrderVisible(true)} variant={"outline-dark"}>Оформить заказ</Button>
                        <CreateOrder show={orderVisible} onHide={() => setOrderVisible(false)} />
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default AboutPage;

