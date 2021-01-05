import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { DeviceList } from "../../Components/DeviceList";
import { CircleSensView } from "../../Components/CircleSensView";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  _Text,
} from "react-native";

export default function MaintenanceScreen() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <CircleSensView/>
        <Text numberOfLines={0} style={{marginVertical:2}} >Sensor Alignment</Text>
      </View>
      <View style={styles.inner2}>
      <Text numberOfLines={0} style={{marginVertical:2}} >Sensor Alignment</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:"1%",
    backgroundColor:"white",
    alignItems:"center",
    flexDirection:"column"    
  },

  inner:{
    flex:1,

    marginBottom:"5%",  
    padding:"2%", 
  },
  inner2:{
    flex:3,
    flexDirection:"row",
    alignSelf:"auto",    
    backgroundColor:"#eee",
    alignItems:"center",
    marginVertical:5
  }

});
