import React, {useContext, useEffect, useState} from 'react';
import { Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateType from "../components/modals/CreateType";
import CreateDevice from "../components/modals/CreateDevice";
import {useNavigate} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
const Admin = () => {
    const { user } = useContext(Context); // Accessing the user from the Context
    const navigate = useNavigate();

    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    useEffect(() => {
        if (user && !user.isAdmin) {

            navigate(LOGIN_ROUTE);
            alert("Недостаточно прав для доступа, авторизуйтесь с правами администратора")
        }
    }, [user, navigate]);

        return (
            <Container className={'d-flex flex-column'}>
                <Button
                    variant={"outline-dark"}
                    className={"mt-4 p-2"}
                    onClick={() => setTypeVisible(true)}
                >
                    Добавить тип
                </Button>
                <Button
                    variant={"outline-dark"}
                    className={"mt-4 p-2"}
                    onClick={() => setBrandVisible(true)}
                >
                    Добавить бренд
                </Button>
                <Button
                    variant={"outline-dark"}
                    className={"mt-4 p-2"}
                    onClick={() => setDeviceVisible(true)}
                >
                    Добавить товар
                </Button>

                <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
                <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
                <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />


            </Container>

        );

};
export default Admin;
