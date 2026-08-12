import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './features/auth/authSlice';

const BlockFactoryLayout = () => {
    const user = useSelector(selectCurrentUser);


    return <Outlet />;
};

export default BlockFactoryLayout;
