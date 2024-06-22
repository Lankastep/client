
import './App.css';
import {jwtDecode} from "jwt-decode";
import React, {useContext, useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import  AppRouter  from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import Footer from "./components/Footer";


const App=observer(()=> {

    if(localStorage.getItem('token')!== null){


        const {user} = useContext(Context)
        const [loading, setLoading] = useState(true)
        useEffect(() => {
            const token = localStorage.getItem('token');
            let userEmail = '';
            setTimeout(()=>{
                check().then(data =>{
                    user.setUser(data)
                    user.setIsAuth(true)
                    if(token){
                        const decodedToken = jwtDecode(token,"tryUnlockTHISsite322@jh&"); // Декодируем JWT токен
                        console.log(decodedToken)
                        userEmail = decodedToken.email; // Извлекаем email из декодированного токена
                    }
                    if(userEmail==='admin@mail.ru'){
                        user.setIsAdmin(true)
                    }
                }).finally(()=>setLoading(false))

            },1000)


        },[user])

        if(loading) {
            return <div className="d-flex justify-content-center ">
                <div className="spinner-border"   role="status">
                    <span className="sr-only">Загрузка...</span>
                </div>
            </div>
        }
    }

    return (

        <BrowserRouter>
        <div>
            <NavBar/>
            <AppRouter/>
            <Footer/>
        </div>
        </BrowserRouter>

    );
})

export default App;
