import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './app/redux/store';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import AppRouters from './app/navigators/AppRouters';

export default function App() {
    return (
        <>
            <Provider store={store}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
                <NavigationContainer>
                    <AppRouters />
                </NavigationContainer>
            </Provider>
        </>
    );
}
