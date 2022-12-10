import React from "react";
import postImageStatic from "assets/img/unsplash_5hcV51EeeWc.png";
import { View, Text, StyleSheet, Image, Pressable, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SaveIcon, ShareIcon } from "components/atoms/SVG";
function CardContent({ data }) {
  return (
    <Pressable onPress={() => {}} style={{ marginHorizontal: 6, marginVertical: 8 }}>
      <View style={{ position: "relative", elevation: 5, width: 150, height: 200, backgroundColor: "white", borderRadius: 10, display: "flex", overflow: "hidden" }}>
        <View style={{ height: "50%", backgroundColor: "gray", overflow: "hidden", flexShrink: 0 }}>
          <Image source={data.img} />
        </View>
        <View style={{ flex: 1, paddingHorizontal: 10, paddingTop: 14 }}>
          <Text style={{ fontFamily: "poppins-regular", fontSize: 11 }}>{data.text} </Text>
        </View>
        <View style={{ position: "absolute", bottom: 4, paddingHorizontal: 10, display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }}>
          <View>
            <Text style={{ fontFamily: "poppins-regular", fontSize: 10, color: "#8F8F8F" }}>6 Mins Read</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <ShareIcon style={{ marginHorizontal: 8 }} />
            <SaveIcon />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default CardContent;
