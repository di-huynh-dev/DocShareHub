import { SafeAreaView, Text, View } from 'react-native';
import React from 'react';

const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-blue">
            <Text>
                <View>
                    <Text className="text-6xl font-bold text-blue">Hello World!</Text>
                </View>
            </Text>
        </SafeAreaView>
    );
};

export default HomeScreen;
