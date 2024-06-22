import React from 'react';
import {Col, Row} from "react-bootstrap";
import TelegramIcon from "../assets/social/TelegramIcon.png";
import VKIcon from "../assets/social/VKIcon.png";
import YoutubeIcon from "../assets/social/YoutubeIcon.png";

const Footer = ()=>{


    return (
        <div className="container ">
            <footer data-bs-theme="dark" className="pb-3 text-light bg-body-tertiary"  >
                <Row>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7746.079327646135!2d20.5007566975531!3d54.74615393630633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e33e22bad9ed9d%3A0x5cb55f5d1605f00c!2z0JrQvtC70LvQtdC00LYg0LjQvdGE0L7RgNC80LDRhtC40L7QvdC90YvRhSDRgtC10YXQvdC-0LvQvtCz0LjQuSDQuCDRgdGC0YDQvtC40YLQtdC70YzRgdGC0LLQsA!5e0!3m2!1sru!2sru!4v1718783390929!5m2!1sru!2sru"
                            width="100%" height="450px" style={{ border:0}} allowFullScreen="" loading="lazy"
                            className={"pb-3"}
                            referrerPolicy="no-referrer-when-downgrade"></iframe>

                        <h2 className={"text-light text-center"}>Мы в соцсетях</h2>
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">
                                <img style={{width:"40px",height:"40px"}}
                                     src={TelegramIcon}/></a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">
                                <img style={{width:"40px",height:"40px"}}
                                     src={VKIcon}/></a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">
                                <img style={{width:"40px",height:"40px"}}
                                     src={YoutubeIcon}/></a></li>
                        </ul>
                </Row>

    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Каталог</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">О нас</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Гарантии</a></li>
                </ul>
                <p className="text-center text-muted">&copy; 2024 ElectroSwift, Все права защищены</p>
            </footer>
        </div>
    )
}
export default Footer;