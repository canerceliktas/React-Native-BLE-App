import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  _Text,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./Screens/Home/Home";
import SettingScreen from "./Screens/Settings/Settings";
import MaintenanceScreen from "./Screens/Maintenance/Maintenance";

const Tab = createMaterialTopTabNavigator();

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
        <Text style={{paddingHorizontal:10, marginTop: 20, fontSize: 16, color: "#FFF" }}>
          Discover and configurate !
        </Text>
        <View style={styles.scanButton}>
          <TouchableOpacity style={styles.roundButton1}>
            <Text style={styles.scanText}>SCAN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 12,
        }}
      >
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Maintenance" component={MaintenanceScreen} />
            <Tab.Screen name="Settings" component={SettingScreen} />
          </Tab.Navigator>
        </NavigationContainer>
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
