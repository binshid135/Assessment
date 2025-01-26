import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Columns from '@/components/columns'
import { router } from 'expo-router'

const Account = () => {






  return (
    <SafeAreaView className='h-full bg-white'>
      <ScrollView>
        <View className='flex justify-center items-center mt-5'>
          <Text className='text-2xl font-bold'>Profile</Text>
        </View>

        <View className='m-5 flex-row'>
          <Image className='w-16 h-16 rounded-xl' style={{ backgroundColor: "rgb(236, 237, 239)" }} />
          <View className='mx-4 flex justify-center'>
            <Text className='text-xl font-bold'>Harsh Ghai</Text>
            <Text className='text-green-600 text-md'>View Profile</Text>
          </View>
        </View>

        <View className='m-2'>
          <View className="space-y-5 m-4">
            <Text className='text-xl font-bold mb-5' >Settings</Text>
            <Columns title='Your favourites' handlepress={() => router.push('/(settings)/Notifications')} />
            <Columns title='Payments' handlepress={() => router.push('/(settings)/Notifications')} />
            <Columns title='Help Centre' handlepress={() => router.push('/(settings)/Notifications')} />
            <Columns title='Voucher' handlepress={() => router.push('/(settings)/Notifications')} />
            <Columns title='Notification' handlepress={() => router.push('/(settings)/Notifications')} />
            <Columns title='Support' handlepress={() => router.push('/(settings)/Notifications')} />
            <Columns title='About' handlepress={() => router.push('/(settings)/Notifications')} />
            <Columns title='Sign out' newClassName="text-green-600 font-semibold" newContainerStyles='mt-4' handlepress={() => router.push('/(settings)/Notifications')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Account