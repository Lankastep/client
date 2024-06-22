import {createOrder} from "../../http/orderAPI";
import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import {observer} from "mobx-react-lite";

const CreateOrder = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const {user} = useContext(Context)
    const [UserName, setUserName] = useState('')
    const [UserEmail, setUserEmail] = useState('')
    const [UserPhone, setUserPhone] = useState('')
    const [ProductName, setProductName] = useState('')
    const [userComment,setUserComment]= useState('')



    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))

    }, [])



    const addOrder = () => {


        const formData = new FormData()
        formData.append('userName', UserName)
        formData.append('userEmail', UserEmail)
        formData.append('userPhone', UserPhone)
        formData.append('productName', ProductName)
        formData.append('comment', userComment)
        createOrder(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Оформить заказ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>

                    <Form.Control
                        value={UserName}
                        onChange={e => setUserName(e.target.value)}
                        className="mt-3"
                        placeholder="Как к вам обращаться?"
                    />
                    <Form.Control
                        value={UserPhone}
                        onChange={e => setUserPhone(e.target.value)}
                        className="mt-3"
                        placeholder="Введите ваш номер телефона"
                    />
                    <Form.Control
                        value={UserEmail}
                        onChange={e => setUserEmail(e.target.value)}
                        className="mt-3"
                        placeholder="Введите эмейл для связи"

                    />
                    <Form.Control
                        value={ProductName}
                        onChange={e => setProductName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название выбранного товара"

                    />
                    <Form.Control
                        value={userComment}
                        onChange={e => setUserComment(e.target.value)}
                        className="mt-3"
                        placeholder=""

                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addOrder}>Создать заявку</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateOrder;
