import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  _Text,
} from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../Source/Icons/BLE_Icon.png")}
        style={{ width: 150, height: 150, marginBottom: 10 }}
      />
      <Text style={{ margin: 5, fontSize: 18, color: "#A9A9A9" }}>
        No device found.
      </Text>
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
