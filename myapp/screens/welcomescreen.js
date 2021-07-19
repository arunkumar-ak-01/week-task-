import React from 'react';
import { ImageBackground, StyleSheet, Text, View,Image } from 'react-native';
const WelcomeScreen = () => {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={{width: '100%', height: '100%'}}>
            
            <View style={{paddingTop:70,paddingLeft:130}}>
            <Image  style={styles.logo} source={require('../assets/logo-red.png')}></Image>
            </View>
    <Text style={styles.text}>Shell What You Don't Need</Text>
    
    <View style={[styles.container1]}></View>
    <View style={styles.container2} ></View>
    
  </ImageBackground>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          logo:{
            paddingTop:50,
            alignItems:'center',
            justifyContent:'space-between',
        width: 100,
        height: 100,
               
               },
               text:{
                     paddingTop:10,
                     paddingLeft:95,
                  alignItems:'center',
                  justifyContent: 'center',
                },
                container3:{
                   
                
                },

        container1:{
            flex:0.75,
            backgroundColor:'#fc5c65',
            marginTop: 300,
        justifyContent: 'flex-end',

        },

    container2:{
        flex:0.75,
        backgroundColor:'#4ECDC4',
        justifyContent: 'flex-end',
        

        
    }
})