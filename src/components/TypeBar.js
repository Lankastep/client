import React, {useContext, useRef} from 'react';
import {observer} from "mobx-react-lite";
import {Button, Col, FormControl, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {device} = useContext(Context);
    const priceMinRef = useRef(null);
    const priceMaxRef = useRef(null);

    const handlePriceFilter = () => {
        const minPrice = priceMinRef.current.value ? parseFloat(priceMinRef.current.value):0;
        const maxPrice = priceMaxRef.current.value ? parseFloat(priceMaxRef.current.value) : Infinity;
        device.setPriceRange(minPrice, maxPrice);
        device.filterDevicesByPrice();
    };

    const handleResetFilter = () => {
        device.resetFilter(); // Call the resetFilter method from DeviceStore
    };

    return (
        <>
            <ListGroup>
                {device.types.map(type =>
                    <ListGroupItem
                        style={{cursor: 'pointer'}}
                        active={type.id === device.selectedType.id}
                        onClick={() => device.setSelectedType(type)}
                        key={type.id}
                    >
                        {type.name}

                    </ListGroupItem>
                )}
            </ListGroup>


            <div className="d-flex pt-3 pb-3 ">
                <Row>
                    <Col className="d-flex align-items-center">
                        <FormControl type="number" ref={priceMinRef} placeholder="Мин. цена"/>
                        <FormControl type="number" ref={priceMaxRef} placeholder="Макс. цена"/>


                    </Col>

                </Row>

            </div>
            <Row>
                <Col md={6}>
                    <Button className={"max-height: 2px"} onClick={handlePriceFilter}>Отсортировать по цене</Button>
                </Col>
                <Col md={6}>
                    <Button onClick={handleResetFilter}>Сбросить фильтр</Button>
                </Col>


            </Row>

        </>
    );
});

export default TypeBar;