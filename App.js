import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import Login from './screens/Login';
import Register from './screens/Register';
import TabNavigator from './navigator/TabNavigator';



//Screen renderings

const Stack = createStackNavigator();

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



