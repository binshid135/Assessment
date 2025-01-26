import { View, Text, ScrollView, Modal, Dimensions, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import CustomSwitches from '@/components/CustomSwitches'
import CustomButton from '@/components/CustomButton'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import CustomCheckbox from '@/components/CustomCheckbox'
import CustomRadioButton from '@/components/CustomRadioButton'
import SortingButton from '@/components/SortingButton'

const { height: SCREEN_HEIGHT } = Dimensions.get('window');


const Notifications = () => {

    const [switchStates, setSwitchStates] = useState({
        switch1: false,
        switch2: false,
        switch3: false,
        switch4: false,
    });


    const toggleSwitch = (key: keyof typeof switchStates) => {
        setSwitchStates((prevStates) => ({
            ...prevStates,
            [key]: !prevStates[key],
        }));
    };

    const [checkboxStates, setCheckboxStates] = useState<{
        [key: string]: boolean;
    }>({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
    });

    const toggleCheckbox = (key: string) => {
        setCheckboxStates((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const [selectedRadio, setSelectedRadio] = useState<string | null>(null);

    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    const clearAllFilters = () => {

        setCheckboxStates({
            checkbox1: false,
            checkbox2: false,
            checkbox3: false,
        });

        setSelectedRadio(null);
        setSelectedFilter(null);
    };




    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView>
                <View className="m-4 flex-row justify-between">
                    <View style={{ flex: 1, marginRight: 28 }} className='ml-2'>
                        <Text className="font-bold text-xl mb-2">Offers/Deals</Text>
                        <Text className="text-gray-400" style={{ fontSize: 12 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fuga eligendi exercitationem doloremque beatae mollitia ipsam! Quos tempore ipsa
                        </Text>
                    </View>
                    <View className='flex justify-center'>
                        <CustomSwitches
                            isOn={switchStates.switch1}
                            onToggle={() => toggleSwitch('switch1')}
                        />
                    </View>
                </View>

                <View className="m-4 flex-row justify-between">
                    <View style={{ flex: 1, marginRight: 28 }} className='ml-2'>
                        <Text className="font-bold text-xl mb-2">Messages</Text>
                        <Text className="text-gray-400" style={{ fontSize: 12 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fuga eligendi exercitationem doloremque beatae mollitia ipsam! Quos tempore ipsa
                        </Text>
                    </View>
                    <View className='flex justify-center'>
                        <CustomSwitches
                            isOn={switchStates.switch2}
                            onToggle={() => toggleSwitch('switch2')}
                        />
                    </View>
                </View>

                <View className="m-4 flex-row justify-between">
                    <View style={{ flex: 1, marginRight: 28 }} className='ml-2'>
                        <Text className="font-bold text-xl mb-2">Voucher/Coupon</Text>
                        <Text className="text-gray-400" style={{ fontSize: 12 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fuga eligendi exercitationem doloremque beatae mollitia ipsam! Quos tempore ipsa
                        </Text>
                    </View>
                    <View className='flex justify-center'>
                        <CustomSwitches
                            isOn={switchStates.switch3}
                            onToggle={() => toggleSwitch('switch3')}
                        />
                    </View>
                </View>

                <View className="m-4 flex-row justify-between">
                    <View style={{ flex: 1, marginRight: 28 }} className='ml-2'>
                        <Text className="font-bold text-xl mb-2">Other</Text>
                        <Text className="text-gray-400" style={{ fontSize: 12 }}>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus fuga eligendi exercitationem doloremque beatae mollitia ipsam! Quos tempore ipsa
                        </Text>
                    </View>
                    <View className='flex justify-center'>
                        <CustomSwitches
                            isOn={switchStates.switch4}
                            onToggle={() => toggleSwitch('switch4')}
                        />
                    </View>
                </View>

                <View className='mt-5 mx-4'>
                    <CustomButton title='Sort and filter' handlepress={toggleModal} />
                </View>


                <Modal
                    visible={isModalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={toggleModal}
                >
                    <TouchableWithoutFeedback onPress={toggleModal}>
                        <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
                    </TouchableWithoutFeedback>

                    <View
                        style={{
                            height: SCREEN_HEIGHT * 0.75,
                            backgroundColor: 'white',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            padding: 16,
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                        }}
                    >
                        <View className='flex-row justify-between mb-3'>
                            <TouchableOpacity onPress={toggleModal}>
                                <MaterialCommunityIcons name="window-close" size={24} color="black" />
                            </TouchableOpacity>
                            <Text className="font-bold text-lg">Sort and Filter</Text>
                            <TouchableOpacity onPress={clearAllFilters}>
                                <Text className='text-lg font-bold text-green-500'>clear</Text>
                            </TouchableOpacity>
                        </View>


                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View className='mt-3'>
                                <Text className='font-bold text-xl'>Sort By</Text>
                                <View className='mt-3'>
                                    <CustomCheckbox
                                        checked={checkboxStates.checkbox1}
                                        label="Recommended"
                                        onChange={() => toggleCheckbox('checkbox1')}
                                    />
                                    <CustomCheckbox
                                        checked={checkboxStates.checkbox2}
                                        label="Delivery time"
                                        onChange={() => toggleCheckbox('checkbox2')}
                                    />
                                    <CustomCheckbox
                                        checked={checkboxStates.checkbox3}
                                        label="Distance"
                                        onChange={() => toggleCheckbox('checkbox3')}
                                    />
                                </View>
                            </View>

                            <View className='mt-3'>
                                <Text className='font-bold text-xl'>Price range</Text>
                                <View className='mt-3'>
                                    <CustomRadioButton
                                        selected={selectedRadio === 'Option 1'}
                                        label="$ Below 10$"
                                        onPress={() => setSelectedRadio('Option 1')}
                                    />
                                    <CustomRadioButton
                                        selected={selectedRadio === 'Option 2'}
                                        label="$$ $10 to $99"
                                        onPress={() => setSelectedRadio('Option 2')}
                                    />
                                    <CustomRadioButton
                                        selected={selectedRadio === 'Option 3'}
                                        label="$$$ over $100"
                                        onPress={() => setSelectedRadio('Option 3')}
                                    />
                                </View>
                            </View>

                            <View className='mt-3'>
                                <Text className='font-bold text-xl'>Ratings</Text>
                                <View className='mt-3 flex-row'>
                                    <SortingButton
                                        label="4 and above"
                                        selected={selectedFilter === '4 and above'}
                                        onPress={() => setSelectedFilter('4 and above')}
                                    />
                                    
                                    <SortingButton
                                        label="4.5 and above"
                                        selected={selectedFilter === '4.5 and above'}
                                        onPress={() => setSelectedFilter('4.5 and above')}
                                    />

                                </View>
                            </View>
                        </ScrollView>

                        {/* <View className="mt-4">
                            <CustomButton title="Apply" handlepress={toggleModal} />
                        </View> */}
                    </View>
                </Modal>



            </ScrollView>
        </SafeAreaView>
    )
}

export default Notifications
