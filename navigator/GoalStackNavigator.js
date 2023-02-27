import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import Goals from '../screens/Goals';
import GoalOverview from '../screens/GoalOverview';
import EditGoal from '../screens/EditGoal';
import { TouchableOpacity, View, Image } from 'react-native';
import { assets } from '../constants';

const Stack = createStackNavigator();


const CustomHeader = ({backPress, onPress}) => {
  return(
    <View 
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        heigh: 50,
      }}>
      <TouchableOpacity onPress={backPress}>
        <Image source={assets.backArrow}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Image source={assets.edit} />
      </TouchableOpacity>
    </View>
  );
};

const GoalStackNavigator = () => {
  const nav = useNavigation();

  return (
    <Stack.Navigator>
        <Stack.Screen name="Your Goals" component={Goals} />
        <Stack.Screen 
          options={{
            header: () => (
              <CustomHeader backPress={nav.navigate('Goals')} onPress={nav.navigate("Edit Goal")} />
            ),
          }}
          name="Goal Overview" 
          component={GoalOverview}
        />
        <Stack.Screen name="Edit Goal" component={EditGoal} />
    </Stack.Navigator>
  );
};

export default GoalStackNavigator;