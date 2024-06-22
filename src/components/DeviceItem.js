import React from 'react';
import {Button, Card, Col, Image} from "react-bootstrap";
import star from '../assets/star.png'
import {useNavigate} from "react-router-dom"
import {DEVICE_ROUTE} from "../utils/consts";
import API_URL from "../test";

const DeviceItem = ({device}) => {
    const navigate = useNavigate();

    return (
        <Col md={3} className={"mt-3"} onClick={()=> navigate(DEVICE_ROUTE +'/'+ device.id)}>
            <Card style={{width:150, cursor:'pointer'}} border={'light'}>
                <Image width={150} height={150} src={API_URL + device.img}/>
                <div className='d-flex text-black-50 mt-1 justify-content-between align-items-center'>

                    <div>{device.name}</div>


                </div>
                    <div>
                        {device.price} руб.
                    </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;