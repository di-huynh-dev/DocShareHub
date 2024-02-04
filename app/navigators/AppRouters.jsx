import React from 'react';
import { SplashScreen } from '../screens';
import { useState } from 'react';
import AuthNavigator from './AuthNavigator';

const AppRouters = () => {
    const [isShowSplash, setIsShowSplash] = useState(false);
    return <>{isShowSplash ? <SplashScreen /> : <AuthNavigator />}</>;
};

export default AppRouters;
