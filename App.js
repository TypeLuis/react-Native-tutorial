import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Text, View, Platform, Linking, Button, Alert, TouchableOpacity, Animated, LogBox } from 'react-native';

import TestUrl from './app/assets/Components/TestUrl';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnimatedTest from './app/assets/Components/AnimatedTest';
import Home from './app/assets/Components/Home';

const { Navigator, Screen } = createNativeStackNavigator();




const OpenSettingsButton = ({ children }) => {

  const handlePress = async () => {
    await Linking.openSettings();
  }

  return <Button title={children} onPress={handlePress} />;
};


export default function App() {

  const OpenURLButton = ({ url, children }) => {

    const handlePress = async () => {

      const supported = await Linking.canOpenURL(url)

      if (supported) {
        await Linking.openURL(url)
      } else {
        Alert.alert(`Url can't open: ${url}`)
      }
    }

    return <Button title={children} onPress={handlePress} />
  }



  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

  return (
    // <Animated.View style={[styles.container, { backgroundColor: bgStyle }]}>

    // <View style={styles.container}>

    <NavigationContainer>
      <Navigator initialRouteName='Home'>
        <Screen name='Home' component={Home} />
        <Screen name='Url' component={TestUrl} />
        <Screen name='Animated' component={AnimatedTest} />
      </Navigator>
    </NavigationContainer>
    // </View>
    //   <Text >Open up App.js to start working on your {Platform.OS}!</Text>
    //   {Platform.OS != 'web' && <OpenSettingsButton >Open Settings</OpenSettingsButton>}
    //   <StatusBar style="auto" />

    //   <View style={styles.spacing}>
    //     <TouchableOpacity onPress={changeColor} style={[styles.button]}>
    //       <Text style={styles.text}>Example</Text>
    //     </TouchableOpacity>
    //   </View>

    //   <View style={[styles.spacing]}>
    //     <Button title='Change Colors' onPress={changeColor}>Change Colors</Button>

    //     <OpenURLButton url={test}>Open URL</OpenURLButton>
    //   </View>

    // </Animated.View>

  );
}



const styles = StyleSheet.create({
});
