import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'

import { COLORS } from '../constants';
import Home from '../screens/Home';
import Store from '../screens/Store';
import New from '../screens/New';
import Goals from '../screens/Goals';
import Habits from '../screens/Habits';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
      <Tab.Navigator 
        screenOptions={{ 
          headerShown: false, 
          tabBarActiveTintColor: COLORS.black,
          tabBarInactiveTintColor: COLORS.white100,
          tabBarStyle: { backgroundColor: COLORS.green100, borderTopLeftRadius: 15, borderTopRightRadius: 15}, 
          //tabBarShowLabel: false,
        }}>
        <Tab.Screen 
          name='Home' 
          component={Home} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen 
          name='Store' 
          component={Store} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="pricetag" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen 
          name='New' 
          component={New} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="add-circle" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen 
          name='Goals' 
            component={Goals} 
            options={{
              tabBarIcon: ({color, size}) => (
                <Ionicons name="rose" color={color} size={size} />
              ),
            }}/>
        <Tab.Screen 
          name='Habits' 
          component={Habits} 
          options={{
            tabBarIcon: ({color, size}) => (
              <Ionicons name="leaf" color={color} size={size} />
            ),
          }}/>
    </Tab.Navigator>
)};

export default TabNavigator;