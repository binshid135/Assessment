import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const _layout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "black",
            tabBarStyle: {
                backgroundColor: "white",
                borderTopWidth: 1,
                borderTopColor: "white",
                height: 60,
                borderTopRightRadius: 6,
                borderTopLeftRadius: 6,
            }
        }}>
            <Tabs.Screen name="Home"
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ color: color, fontSize: 10 }}>home</Text>,
                    tabBarIcon: ({ color }) =>
                        <Feather style={{ marginTop: 5 }} name="home" size={24} color={color} />
                }}
            />
            <Tabs.Screen name="Orders"
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ color: color, fontSize: 10 }}>orders</Text>,
                    tabBarIcon: ({ color }) =>
                        <Feather name="shopping-bag" style={{ marginTop: 5 }} size={24} color={color} />
                }}
            />
            <Tabs.Screen name="History"
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ color: color, fontSize: 10 }}>history</Text>,
                    tabBarIcon: ({ color }) =>
                        <Feather name="clock" style={{ marginTop: 5 }} size={24} color={color} />
                }}
            />
            <Tabs.Screen name="Account"
                options={{
                    tabBarLabel: ({ color }) =>
                        <Text style={{ color: color, fontSize: 10 }}>Account</Text>,
                    tabBarIcon: ({ color }) =>
                        <MaterialCommunityIcons style={{ marginTop: 4 }} name="account-outline" size={28} color={color} />
                }}
            />
        </Tabs>
    )
}

export default _layout