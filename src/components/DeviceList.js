import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";
import {Context} from "../index";


const DeviceList = observer(() => {
    const {device} = useContext(Context)
    return (
        <Row className="d-flex flex-wrap ">
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device}/>
            )}
        </Row>
    );
});

export default DeviceList;