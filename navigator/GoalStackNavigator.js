import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Goals from '../screens/Goals';
import GoalOverview from '../screens/GoalOverview';
import EditGoal from '../screens/EditGoal';

const Stack = createStackNavigator();

const GoalStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Your Goals" component={Goals} />
        <Stack.Screen name="Goal Overview" component={GoalOverview} />
        <Stack.Screen name="Edit Goal" component={EditGoal} />
    </Stack.Navigator>
  );
};

export default GoalStackNavigator;