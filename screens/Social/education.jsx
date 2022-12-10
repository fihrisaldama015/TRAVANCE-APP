import { View, Text, Pressable, FlatList, Image, ScrollView } from "react-native";
import Constants from "expo-constants";
import { useState } from "react";
import CardContent from "components/molecules/cardContent";
import gambarContoh from "assets/img/unsplash_5hcV51EeeWc.png";
import { CommentIcon, FollowerSvg, LikeIcon, ThumbIcon } from "components/atoms/SVG";

export default function SocialScreen({ navigation }) {
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
  const [homeSection, setHomeSection] = useState("articles");
  const chooseHomeSection = (section) => {
    setHomeSection(section);
  };
  const Item = () => <CardContent data={""} />;
  const renderItem = ({ item }) => <Item />;
  const ChoseComp = () => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginVertical: 10,
          paddingHorizontal: 14,
        }}
      >
        <Pressable onPress={() => {}}>
          <View
            style={{
              backgroundColor: "#4649FF",
              borderRadius: 10,
              padding: 4,
              width: 56,
              height: 26,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bordeRadius: 10,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 10 }}>Articles</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {}}>
          <View
            style={{
              backgroundColor: "white",
              width: 56,
              height: 26,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginLeft: 10,
            }}
          >
            <Text style={{ color: "black", fontWeight: "600", fontSize: 10 }}>Videos</Text>
          </View>
        </Pressable>
      </View>
    );
  };
  return (
    <View style={{}}>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 20,
            marginBottom: 5,
            marginLeft: 20,
          }}
        >
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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {DATA.map((data, id) => {
            return <CardContent key={id} data={data} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
