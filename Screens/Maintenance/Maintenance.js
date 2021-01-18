import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { DeviceList } from "../../Components/DeviceList";
import { CircleSensView } from "../../Components/CircleSensView";
import { CustomListView } from "../../Components/CustomList";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  _Text,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";


const DeviceParameter = [
  {key:1, title:"Motor Operation Time", description: "2 hour 5 minutes"},
  {key:2, title:"Light 1 Operation Time", description: "5 hour 2 minutes"},
  {key:3, title:"Light 2 Operation Time", description: "1 hour 23 minutes"},
  {key:4, title:"Motor Operation Cycle", description: "365"},
  {key:5, title:"Light 1 Operation Cycle", description: "1545"},
  {key:6, title:"Light 2 Operation Cycle", description: "762"},  
];

const Item = ({ title, description })=>(
  <View style={styleListItem.container}>    
      <View style={styleListItem.container_text}>
          <Text style={styleListItem.title}>
              {title}
          </Text>
          <Text style={styleListItem.description}>
              {description}
          </Text>
      </View>
  </View>

);


export default function MaintenanceScreen() {

  const renderItem = ({ item }) => (
    <Item title = {item.title} description = {item.description} />
  );
     
        

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={{flex:1, alignItems:"center"}}>
          <CircleSensView />
          <Text numberOfLines={0} style={{ marginVertical: 2 }}>
            Sensor Alignment
          </Text>
        </View>
      </View>
      <View style={styles.inner2}>
        <View style={styles.inner3, {flex:3}}>
          <FlatList data ={DeviceParameter} renderItem={renderItem} />
        </View>
        <View style={styles.inner3, {flex:1}}>
          <Text numberOfLines={0} style={{ marginVertical: 2 }}>
            This is Right Side
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "1%",
    backgroundColor: "green",
    flexDirection: "column",
  },

  inner: {
    flex: 1,
    padding: "2%",
  },
  inner2: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "#aee",
    justifyContent: "space-between",
    marginTop:"8%",
  },
  inner3: {
    padding:"5%",
    flex: 1,
    backgroundColor: "grey",
  },
});


const styleListItem = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      marginLeft:16,
      marginRight:16,
      marginTop: 8,
      marginBottom: 8,
      borderRadius: 5,
      backgroundColor: '#FFF',
      elevation: 2,
  },
  title: {
      fontSize: 16,
      color: '#000',
  },
  container_text: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 12,
      justifyContent: 'center',
  },
  description: {
      fontSize: 11,
      fontStyle: 'italic',
  },
  photo: {
      height: 50,
      width: 50,
  },
});