import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          backgroundColor: "#1FA9E6",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 16, color: "#FFF" }}>
          Click to SCAN for available devices.
        </Text>
        <View style={styles.scanButton}>
          <TouchableOpacity style={styles.roundButton1}>
            <Text style={styles.scanText}>SCAN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 10,
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image source={require("./Source/Icons/BLE_Icon.png")} style={{width:150,height:150,marginBottom:10}} />
        <Text style={{margin:5, fontSize:18, color:'#A9A9A9'}}>No device found.</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: "skyblue" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#14F4FC",
    alignItems: "center",
    justifyContent: "center",
  },

  scanButton: {},

  scanText: {
    alignSelf: "flex-start",
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },

  roundButton1: {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
