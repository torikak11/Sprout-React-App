import React, { useState, useEffect } from 'react';
import { Text, FlatList, View, StyleSheet, ScrollView, Image } from 'react-native';
import { ViewButton, VerticalCard } from '../components';
import { assets, COLORS, FONTS, SIZE, GoalData, HabitData } from '../constants';

const Home = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [pressed, setPressed] = useState(1);

  //Retrieve hour of day for greeting
  useEffect(() => {
    let hour = new Date().getHours();
    let greeting;
    if (hour >= 4 && hour < 8)
      greeting = 'Good Morning';
    else if (hour >= 8 && hour < 12)
      greeting = 'Good Morning';
    else if (hour >= 12 && hour < 17)
      greeting = 'Good Afternoon';
    else if (hour >= 17 && hour < 21)
      greeting = 'Good Evening';
    else if (hour >= 21 && hour < 4)
      greeting = 'Good Night';
    setCurrentTime(greeting);
  });

  return (
    <ScrollView 
      contentContainerStyle={{
        backgroundColor: COLORS.white200,
      }}>
      <View style={styles.background}>
        <Image style={{width: '100%'}} source={assets.earlyMorning} />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.heading} >{currentTime},</Text>
        <Text style={styles.heading} >Victoria</Text>
      </View>
      <View style={styles.plantsContainer} ></View>
      <View style={styles.buttonsContainer}>
        <ViewButton  
          name="All" 
          onPress={() => setPressed(1)}
          filled={pressed == 1 ? true : false}
        />
        <ViewButton 
          name="Goals"
          onPress={() => setPressed(2)} 
          filled={pressed == 2 ? true : false}
        />
        <ViewButton 
          name="Habits" 
          onPress={() => setPressed(3)}
          filled={pressed == 3 ? true : false}
        />
      </View>
      <Text style={styles.subheading} >Goals</Text>
      <View style={styles.goalsContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={GoalData}
          renderItem={({item}) => <VerticalCard color={item.color} name={item.name} progress={item.progress} type="goal" />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Text style={styles.subheading} >Habits</Text>
      <View style={styles.habitsContainer}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={HabitData}
          renderItem={({item}) => <VerticalCard color={item.color} name={item.name} progress={item.progress} type="habit" />}
          keyExtractor={(item) => item.id}
        ></FlatList>
      </View>
      <View style={styles.calendarContainer}>
        <Text style={styles.subheading} >Calendar</Text>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  layout: {
    backgroundColor: COLORS.white200,
  },
  background: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0, 
    left: 0,
    zIndex: -1,
  },
  headingContainer: {
    margin: 40,
  },
  plantsContainer: {
    height: 350,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  goalsContainer: {
    height: 240,
  },
  habitsContainer: {
    height: 240,
  },
  calendarContainer: {
    height: 300,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: SIZE.heading,
    color: COLORS.white100,
  },
  subheading: {
    fontFamily: FONTS.bold,
    fontSize: SIZE.heading02,
    color: COLORS.black,
    marginHorizontal: 20,
    paddingTop: 20,
  },
});