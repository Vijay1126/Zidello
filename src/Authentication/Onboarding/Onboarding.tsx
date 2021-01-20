import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Slide from "./Slide";

interface Onboarding {}

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  slider: {
    height:  height*.61,
    backgroundColor: "#d62828",
    borderBottomRightRadius: 75,
  },
  footer: {
    // height: height/2,
    flex: 1
  
  },
});

const Onboarding = () => {
  return (
    <View style = {styles.container}>
      <View style={styles.slider}>
        <ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          <Slide label="Pop" />
          <Slide label="Rock" right />
          <Slide label="Hiphop" />
          <Slide label="Classics" right />
        </ScrollView>
      </View>
      {/* <View style={styles.footer}>
        <View style = {{...StyleSheet.absoluteFillObject, backgroundColor: "r"}}/>
        <View style = {{flex: 1, backgroundColor: "white", borderTopLeftRadius: 75}}/>
      </View> */}
      <View style = {styles.footer}>
            <View style = {{...StyleSheet.absoluteFillObject, backgroundColor: "#d62828"}}/>
            <View style = {{flex: 1, backgroundColor: "white", borderTopLeftRadius: 75}}/>
      </View>
    </View>
  );
};

export default Onboarding;
