import React from "react";
import { Text, StyleSheet, TouchableOpacity, View, ImageBackground } from "react-native";

const image = require('../../rn-first-app/Source/Circle.png')

const CircleSensView = () => {
  return( <View styles={styles.container}>
    <Text style={{marginBottom:8, marginTop:8}}>Sensor Alignment</Text>
    <ImageBackground source={image} style={styles.image}>
        <Text style={styles.text}>%75</Text>
    </ImageBackground>
    
  </View>)
};

const styles = StyleSheet.create({
  container: {
      marginVertical:14,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
      alignItems:'center',
      justifyContent:'center',
      width:100,
      height:100,      
      flex:1
  },
  text: {
      color:'#696969',
      marginTop:14,
      fontSize:42
  }
});

export { CircleSensView };
