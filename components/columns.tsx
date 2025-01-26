import { View, Text, TouchableOpacity, StyleSheet, GestureResponderEvent } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';

interface ColumnProps {
    title?: string;
    newClassName?: string;
    newContainerStyles?:string;
    handlepress: (event: GestureResponderEvent) => void;
}


const Columns: React.FC<ColumnProps> = ({ title ,newClassName,newContainerStyles,handlepress }) => {
    const styles = StyleSheet.create({
        touchableOpacity: {
            borderBottomWidth: 1,
            borderBottomColor: '#D1D1D1',
            paddingBottom: 10,
            marginBottom: 10,
        },
    })

    return (
        <TouchableOpacity
        onPress={handlepress}
         className={`flex-row justify-between ${newContainerStyles || ''}`} style={styles.touchableOpacity} >
            <View className="flex-row mb-1">
                <Text className={`text-sm  text-gray-600 ${newClassName || ''}`}>{title}</Text>
            </View>
            <View className='mb-1'>
            <MaterialIcons name="arrow-forward-ios" size={22} color="black" />
            </View>
        </TouchableOpacity>
    )
}

export default Columns