import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';



const SettingsLayout = () => {
    const router = useRouter();
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerStyle:{
                    backgroundColor:"white"
                },
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerTitle: () =>
                    <Text className='font-bold text-xl'>Push Notification</Text>
                ,
                headerLeft: () => (
                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => router.back()}>
                        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
                    </TouchableOpacity>
                ),
            }}
        >
            <Stack.Screen
                name="Notifications"
            />
        </Stack>
    )
}

export default SettingsLayout