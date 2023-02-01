import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { COLORS, SHADOWS, SIZE } from '../constants';
import Home from '../screens/Home';
import Store from '../screens/Store';
import New from '../screens/New';
import Goals from '../screens/Goals';
import Habits from '../screens/Habits';
import GoalStackNavigator from './GoalStackNavigator';


const Tab = createBottomTabNavigator();

const TabBarAddButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
      ...SHADOWS.shadow01,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.black,
        paddingLeft: 4,
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const TabNavigator = () => {
    return (
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false, 
          //tabBarActiveTintColor: COLORS.black,
          //tabBarInactiveTintColor: COLORS.white100,
          tabBarStyle: { 
            position: 'absolute',
            bottom: 0,
            backgroundColor: COLORS.green200, 
            borderTopLeftRadius: 15, 
            borderTopRightRadius: 15,
            height: 70,
          }, 
          tabBarShowLabel: false,
        }}>
        <Tab.Screen 
          name='Home' 
          component={Home} 
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center', top: 10,}}>
                <Ionicons name="home" color={focused ? COLORS.white100 : COLORS.black} size={30} />
                <Text
                  style={{color: focused ? COLORS.white100 : COLORS.black, fontSize: SIZE.span}}>
                  Home
                </Text>
              </View>
            ),
          }}/>
        <Tab.Screen 
          name='Store' 
          component={Store} 
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center', top: 10,}}>
                <Ionicons name="pricetag" color={focused ? COLORS.white100 : COLORS.black} size={30} />
                <Text
                  style={{color: focused ? COLORS.white100 : COLORS.black, fontSize: SIZE.span}}>
                  Store
                </Text>
              </View>
            ),
          }}/>
        <Tab.Screen 
          name='New' 
          component={New} 
          options={{
            tabBarIcon: ({focused}) => (
              <Ionicons name="add" color={COLORS.white100} size={50} />
            ),
            tabBarButton: (props) => (
              <TabBarAddButton {...props} />
            )
          }}/>
        <Tab.Screen 
          name='Goals' 
          component={GoalStackNavigator} 
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center', top: 10,}}>
                <Ionicons name="rose" color={focused ? COLORS.white100 : COLORS.black} size={30} />
                <Text
                  style={{color: focused ? COLORS.white100 : COLORS.black, fontSize: SIZE.span}}>
                  Goals
                </Text>
              </View>
            ),
          }}/>
        <Tab.Screen 
          name='Habits' 
          component={Habits} 
          options={{
            tabBarIcon: ({focused}) => (
              <View style={{justifyContent: 'center', alignItems: 'center', top: 10,}}>
                <Ionicons name="leaf" color={focused ? COLORS.white100 : COLORS.black} size={30} />
                <Text
                  style={{color: focused ? COLORS.white100 : COLORS.black, fontSize: SIZE.span}}>
                  Habits
                </Text>
              </View>
            ),
          }}/>
    </Tab.Navigator>
)};

export default TabNavigator;