import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { Image } from 'react-native';

import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import Store from './screens/Store';
import New from './screens/New';
import Goals from './screens/Goals';
import Habits from './screens/Habits';
import { assets, COLORS } from './constants';



//Screen renderings

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.white100,
        tabBarStyle: { backgroundColor: COLORS.green100, borderTopLeftRadius: 15, borderTopRightRadius: 15}, 
        tabBarShowLabel: false,
      }}>
      <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons source={assets.home} color={color} size={size} />
          ),
        }}/>
      <Tab.Screen 
        name='Store' 
        component={Store} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Image source={assets.store} color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name='New' component={New} />
      <Tab.Screen name='Goals' component={Goals} />
      <Tab.Screen name='Habits' component={Habits} />
    </Tab.Navigator>
  )
}

const App = () => {
  const [loaded] = useFonts({
    PlayfairDisplayRegular: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    PlayfairDisplayMedium: require("./assets/fonts/PlayfairDisplay-Medium.ttf"),
    PlayfairDisplaySemiBold: require("./assets/fonts/PlayfairDisplay-SemiBold.ttf"),
    PlayfairDisplayBold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
  });

  if(!loaded) return null;

 return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 };

export default App;



