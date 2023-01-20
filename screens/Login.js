import React from 'react';
import { useState } from 'react';
import { Image, StyleSheet, View, Text, SafeAreaView, Button } from 'react-native';

import { assets, COLORS, SIZE, SHADOWS, FONTS } from '../constants';
import { TextInput, Logo } from '../components';

const Login = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.layout}>
        <Text style={styles.header}>Welcome!</Text>
        <Text style={styles.subheader}>Please login</Text>
        <View style={styles.inputs}>
          <TextInput />
          <TextInput />
          <Button title='Login' />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Don't have an account?</Text>
          <Text style={styles.text}>Create one here</Text>
        </View>
        <View style={styles.logo}>
          <Logo />
        </View>
      </View>
      <View style={styles.background}>
        <View style={styles.backcolor} />
        <Image style={styles.lines} source={assets.lines04} />
      </View>
    </SafeAreaView>
  );  
};

export default Login;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    margin: 40,
  },
  background: {
    backgroundColor: COLORS.brown100,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0, 
    left: 0,
    zIndex: -1,
  },
  backcolor: {
    flex: 3,
  },
  lines: {
    flex: 1,
    height: 318,
    width: 300,
  },
  header: {
    color: COLORS.white100,
    fontFamily: FONTS.bold,
    fontSize: SIZE.heading,
  },
  subheader: {
    color: COLORS.white100,
    fontFamily: FONTS.regular,
    fontSize: SIZE.heading,
    marginBottom: 20,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZE.small,
    color: COLORS.white100,
  },
  inputs: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});