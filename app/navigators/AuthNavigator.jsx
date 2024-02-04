import { View, Text } from 'react-native';
import React from 'react';
import { LoginScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShow: false,
            }}
        >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    );
};
export default AuthNavigator;
