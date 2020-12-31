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
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View style={{ flex: 1 }}>
        <CircleSensView />
      </View>

      <View style={{ flex: 3, marginVertical:10, backgroundColor: "#FF00FF" }}>
        <Text>ikinci view</Text>
      </View>
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
    marginTop: 20,
    alignSelf: "center",
    //backgroundColor:'#FF00FF',
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
