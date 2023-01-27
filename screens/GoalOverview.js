import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { CheckBoxInput,ProgressBar } from '../components';

const GoalOverview = (props) => {
  return (
    <SafeAreaView>
      <View style={styles.infoContainer}>
        <Text>Create a mobile app</Text>
        <Text>Progress</Text>
        <ProgressBar />
        <Text>Steps</Text>
        <CheckBoxInput isSelected={true} text="Design wireframe in Figma" />
        <CheckBoxInput isSelected={false} text="Design static layout in Figma" />
        <CheckBoxInput isSelected={false} text="Create project in React Native" />
      </View>
    </SafeAreaView>
  );
};

export default GoalOverview;

const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
  },
});