import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ViewImageScreen from './screens/viewimagescreen';
import WelcomeScreen from './screens/welcomescreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <WelcomeScreen/> 
      {/* <ViewImageScreen/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
