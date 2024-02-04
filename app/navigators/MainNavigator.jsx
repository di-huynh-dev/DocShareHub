import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';

const MainNavigator = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            screenOptions =
            {{
                headerShow: false,
            }}
            <Stack.Screen name="Main" component={TabNavigator}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default MainNavigator;
