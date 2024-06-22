import React, { useContext } from 'react';
import {Routes, Route} from 'react-router-dom';
import { authRoutes, publicRoutes } from '../Routes';
import {Context} from '../index';

import Shop from '../pages/shop';

const AppRouter = () => {
    //const iaAuth = false
    const {user} = useContext(Context)

    return (

        <Routes>

            {user.isAuth && authRoutes.map(({path,Component}) =>
            <Route key = {path} path = {path} element={<Component/>} exact/>
            )}

            {publicRoutes.map(({path,Component}) =>
            <Route key = {path} path = {path} element={<Component/>} exact/>
            )}

            <Route path="*" element={<Shop/>}/>

        </Routes>

    );
};

export default AppRouter;