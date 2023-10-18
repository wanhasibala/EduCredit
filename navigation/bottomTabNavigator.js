import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Ionicons} from "@expo/vector-icons"
import { COLORS } from '../constants/theme';
import {Home, Notification, Loan, Profile} from '../screen/index'

const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel : false,
    tabBarHideOnKeyboard : true,
    headerShown: false,
    tabBarStyle: {
        position: 'absolute',
        bottom : 0,
        right: 0,
        left : 0,
        elevation: 0,
        height : 70,
    }
}

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={focused ? COLORS.primary : COLORS.gray2 }/> 
            }
        }}/>
        <Tab.Screen name='Loan' component={Loan} options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? 'card' : 'card-outline'} size={24} color={focused ? COLORS.primary : COLORS.gray2 }/> 
            }
        }}/>
        <Tab.Screen name='Notification' component={Notification} options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? 'notifications' : 'notifications-outline'} size={24} color={focused ? COLORS.primary : COLORS.gray2 }/> 
            }
        }}/>
        <Tab.Screen name='Profile' component={Profile} options={{
            tabBarIcon: ({focused}) => {
                return <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={focused ? COLORS.primary : COLORS.gray2 }/> 
            }
        }}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigator