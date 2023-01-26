import { SafeAreaView, Text, FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, GoalData, SIZE } from '../constants';
import HorizontalCard from '../components';

const Goals = () => {

  return (
    <SafeAreaView style={styles.layout} >
      <Text style={styles.heading} >Your Goals</Text>
      <View style={styles.goalsContainer} >
        <FlatList
            data={GoalData}
            renderItem={({item}) => <HorizontalCard color={item.color} name={item.name} />}
            keyExtractor={(item) => item.id}
          />
      </View>
    </SafeAreaView>
  )
}

export default Goals;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: COLORS.white200,
  },
  heading: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZE.heading02,
    color: COLORS.black,
    marginTop: 40,
    marginLeft: 40,
  },
  goalsContainer: {
    flex: 1,
    backgroundColor: '#222222',
  },
});