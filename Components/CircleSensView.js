import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";

const image = require("../../rn-first-app/Source/Circle.png");

const CircleSensView = () => {
  return (
    <View styles={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <View style={{ flex: 1, justifyContent:"center",alignItems:"center" }}>
          <Text style={styles.text}>%75</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
  },
  inner: {},
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "#696969",
    fontSize: 28,
    marginBottom:"1%"
  },
});

export { CircleSensView };
