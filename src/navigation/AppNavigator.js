import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StyleSheet } from 'react-native';

import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Stack de navegación para el flujo principal
const MainStack = () => {
    const [showWelcome, setShowWelcome] = useState(true);

    if (showWelcome) {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Bienvenido">
                    {() => <WelcomeScreen onStart={() => setShowWelcome(false)} />}
                </Stack.Screen>
            </Stack.Navigator>
        );
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Recetas">
                {() => (
                    <Tab.Navigator
                        screenOptions={{
                            tabBarActiveTintColor: '#FF6B35',
                            tabBarInactiveTintColor: '#999999',
                            tabBarStyle: styles.tabBar,
                            tabBarLabelStyle: styles.tabLabel,
                            headerShown: false,
                        }}
                    >
                        <Tab.Screen
                            name="Home"
                            component={HomeScreen}
                            options={{
                                tabBarLabel: 'Inicio',
                                tabBarIcon: ({ color }) => (
                                    <Text style={[styles.tabIcon, { color }]}></Text>
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Favorites"
                            component={FavoritesScreen}
                            options={{
                                tabBarLabel: 'Favoritos',
                                tabBarIcon: ({ color }) => (
                                    <Text style={[styles.tabIcon, { color }]}></Text>
                                ),
                            }}
                        />
                    </Tab.Navigator>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

// Navegador principal
const AppNavigator = () => {
    return (
        <NavigationContainer>
            <MainStack />
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: '#FFFFFF',
        borderTopWidth: 1,
        borderTopColor: '#E8E8E8',
        paddingVertical: 4,
        height: 60,
    },
    tabLabel: {
        fontSize: 12,
        fontWeight: '500',
        marginTop: 2,
    },
    tabIcon: {
        fontSize: 24,
    },
});

export default AppNavigator;