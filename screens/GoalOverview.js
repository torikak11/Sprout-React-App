import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { CheckBoxInput, ProgressBar, Logo } from '../components';
import { COLORS, FONTS, SIZE } from '../constants';

const GoalOverview = (props) => {
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.plantContainer}>
        <Logo />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Create a mobile app</Text>
        <Text style={styles.subheading}>Progress</Text>
        <View style={styles.progressBar} >
          <ProgressBar />
        </View>
        <Text style={styles.subheading}>Steps</Text>
        <View style={styles.checkboxContainer}>
          <CheckBoxInput isSelected={true} text="Design wireframe in Figma" />
          <CheckBoxInput isSelected={false} text="Design static layout in Figma" />
          <CheckBoxInput isSelected={false} text="Create project in React Native" />
        </View>
      </View>
      <View style={styles.background}>
        <View style={{height: 400, backgroundColor: COLORS.white200}} />
        <View style={{flex: 1, backgroundColor: COLORS.green100}} />
      </View>
    </SafeAreaView>
  );
};

export default GoalOverview;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  plantContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    backgroundColor: COLORS.green100,
    flex: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  checkboxContainer: {
    marginLeft: 25,
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: -1,
  },
  title: {
    fontFamily: FONTS.medium,
    fontSize: SIZE.heading02,
    color: COLORS.white100,
    textAlign: 'center',
    marginVertical: 20,
  },
  subheading: {
    fontFamily: FONTS.medium,
    fontSize: SIZE.subheading,
    color: COLORS.black,
    textAlign: 'center',
    marginBottom: 15,
  },
  progressBar: {
    alignItems: 'center',
    marginBottom: 15,
  },
});