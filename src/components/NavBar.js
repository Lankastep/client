import React, {useContext} from 'react';
import {Button, Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {Context} from '../index';
import {NavLink, useNavigate} from "react-router-dom";
import {ADMIN_ROUTE, SHOP_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {publicRoutes} from "../Routes";
import logo from "../assets/logo.png"



const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logOut = ()=> {
            user.setUser({})
            user.setIsAuth(false)
            user.setIsAdmin(false)
        localStorage.removeItem('token')
        navigate(SHOP_ROUTE)
    }

    return (

            <Navbar data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
                <Container>

                    <Navbar.Brand to={SHOP_ROUTE}><img  width={"20px"} height={"20px"} src={logo}/> ElectroSwift</Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse className={" ms-auto ps-4"} id="navbarScroll">

                        <Container >
                            <Row>
                                <Col md={6} className={"text-white d-flex    align-items-center"}>

                                        <NavLink  className={"me-2"} style = {{color:'white',textDecoration:'none'}} to={SHOP_ROUTE}>Каталог</NavLink>
                                        <NavLink style = {{color:'white',textDecoration:'none'}} to={SHOP_ROUTE}>О нас</NavLink>
                                </Col>

                                <Col md={6} className={"text-white"}>
                                    Наш адрес: г. Калининград, ул. Горького 166<br/>
                                    Наш телефон: 8-911-499-80-42 (С 09:00 до 19:00)
                                </Col>
                            </Row>


                        </Container>

                        {user.isAuth && user.isAdmin ?

                               <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll>
                                <Button onClick={() => navigate(ADMIN_ROUTE)}>Админ панель</Button>
                                <Button className='ms-lg-4' onClick={() => logOut()}>Выйти</Button>

                                </Nav>

                                : user.isAuth ?
                                <Nav
                                    className="ms-auto my-2 my-lg-0"
                                    style={{maxHeight: '100px'}}
                                    navbarScroll>
                                    <Button className='ms-4' onClick={() => logOut()}>Выйти</Button>

                                </Nav>
                                :
                                    <Nav
                                    className="ms-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll>
                                <Button onClick={()=>navigate(LOGIN_ROUTE)}>Авторизация</Button>

                                    </Nav>

                            }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
});

export default NavBar;