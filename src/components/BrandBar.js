import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Col, Row} from "react-bootstrap";

const BrandBar = observer(() => {
    const{device} = useContext(Context)
    return (
        <Row className={'d-flex  '}>
                <Col className={'d-flex flex-wrap  '}>
                {device.brands.map(brand =>
                    <Card
                        style = {{cursor:'pointer'}}
                        key = {brand.id}
                        className={'p-3 m-2 col-xl-1 align-items-center'}
                        onClick={()=>device.setSelectedBrand(brand)}
                        border = {brand.id === device.selectedBrand.id ? 'danger':'light'}
                    >
                        {brand.name}
                    </Card>
                )}
                </Col>

            
        </Row>
    );
});

export default BrandBar;
