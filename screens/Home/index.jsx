import { useEffect, useState } from "react";

import { View, Text, StyleSheet, Image, Pressable, Button, FlatList, ScrollView } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import profileImage from "assets/img/profile.png";
import CardContent from "components/molecules/cardContent";
import Constants from "expo-constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function HomeScreen() {
  const [userName, setUserName] = useState("");
  const DATA = [
    {
      text: "Investasi Untuk Pemula : 10 Hal yang harus dihindari investor pemula ",
      img: require("assets/img/1.png"),
    },
    {
      text: "Investasi Untuk Pemula : Pembahasan Mengenai Bitcoin",
      img: require("assets/img/2.png"),
    },
    {
      text: "Trading Crypto, Pengertian, Cara Kerja, dan Tips Melakukannya",
      img: require("assets/img/3.png"),
    },
    {
      text: "Beberapa Cara Sukses untuk Trading Via Smartphone",
      img: require("assets/img/4.png"),
    },
    {
      text: "Tips Untuk Menjadi Trading Crypto Yang Sukses dengan Saham Besar",
      img: require("assets/img/5.png"),
    },
    {
      text: "Tips Investasi Saham Crypto, Bitcoin, etc. Untuk Pemula",
      img: require("assets/img/6.png"),
    },
  ];
  const Item = () => <CardContent />;
  const renderItem = ({ item }) => <Item />;
  const [homeSection, setHomeSection] = useState("articles");
  const chooseHomeSection = (section) => {
    setHomeSection(section);
  };
  useEffect(() => {
    const getUserName = async () => {
      try {
        const getUserName = await AsyncStorage.getItem("username");
        setUserName(getUserName);
      } catch (error) {}
    };
    getUserName();
  }, []);
  return (
    <View style={{ paddingTop: Constants.statusBarHeight, paddingHorizontal: 10 }}>
      <ScrollView>
        <View>
          <View>
            <View style={{}}>
              <Text style={{ fontWeight: "800", fontSize: 16, fontFamily: "poppins-regular" }}>{userName ? userName : ""}</Text>
            </View>
            <View style={{ marginTop: 2 }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "400",
                  fontFamily: "poppins-regular",
                }}
              >
                Wellcome Back
              </Text>
            </View>
          </View>
          {/* container current balance and profile */}
          <View
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              marginTop: 20,
              position: "relative",
            }}
          >
            {/* current balance container */}
            <View
              style={{
                position: "absolute",
                width: 60,
                height: 60,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                top: -30,
                zIndex: 2,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: "black",
                  borderRadius: 10,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image source={profileImage} />
              </View>
            </View>
            <LinearGradient
              colors={["#4650FF", "#C47AFFB5"]}
              style={{
                height: 170,
                width: 280,
                backgroundColor: "blue",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View>
                <Text style={{ color: "white", fontFamily: "poppins-regular" }}>Current Balance</Text>
              </View>
              <View style={{ marginBottom: 6 }}>
                <Text
                  style={{
                    color: "white",
                    fontFamily: "poppins-regular",
                    fontWeight: "700",
                    fontSize: 22,
                  }}
                >
                  Rp. 116, 95
                </Text>
              </View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text style={{ color: "white", fontFamily: "poppins-regular" }}>Weekly Profit</Text>
                <View
                  style={{
                    backgroundColor: "white",
                    marginHorizontal: 5,
                    paddingVertical: 2,
                    paddingHorizontal: 4,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>+21.00%</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
          {/* choosecontent */}

          <View style={{ display: "flex", flexDirection: "row", marginTop: 40, marginBottom: 10, marginLeft: 10 }}>
            <Pressable
              onPress={() => {
                chooseHomeSection("articles");
              }}
            >
              <View
                style={[
                  homeSection == "articles" ? { backgroundColor: "#4649FF" } : { backgroundColor: "white" },
                  {
                    padding: 4,
                    width: 56,
                    height: 26,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                  },
                ]}
              >
                <Text style={[homeSection == "articles" ? { color: "white" } : { color: "black" }, { fontWeight: "600", fontSize: 10 }]}>Articles</Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => {
                chooseHomeSection("videos");
              }}
            >
              <View
                style={[
                  homeSection == "videos" ? { backgroundColor: "#4649FF" } : { backgroundColor: "white" },
                  {
                    width: 56,
                    height: 26,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                    marginLeft: 10,
                  },
                ]}
              >
                <Text style={[homeSection == "videos" ? { color: "white" } : { color: "black" }, { fontWeight: "600", fontSize: 10 }]}>Videos</Text>
              </View>
            </Pressable>
          </View>
          {/* container card */}
        </View>

        <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center" }}>
          {DATA.map((cardContentData, i) => {
            return <CardContent key={i} data={cardContentData} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  graphicsMenu: {
    padding: 10,
  },
});
