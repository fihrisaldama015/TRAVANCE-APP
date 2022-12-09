import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import profileImage from "assets/img/profile.png";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
import SVGWallet from "../../assets/svg/cryptoWallet.svg";
import SVGDropDown from "../../assets/svg/dropdown.svg";
import SVGInfo from "../../assets/svg/staticsInfo.svg";

export default function MoneyScreen() {
  const [filter, setFilter] = useState("Year");
  const StaticsData = [
    { title: "Harga Sekarang", price: 116.95 },
    { title: "Market Cap", price: 300.02 },
    { title: "Volume 24h", price: 20.0 },
    { title: "Suplai Tersedia", price: 10.04 },
    { title: "Max Supply", price: 15.32 },
  ];
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginRight: 8,
            }}
          >
            Crypto Income
          </Text>
          <SVGWallet width={20} height={20} />
        </View>
        <View
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 12,
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
              <Text style={{ color: "white", fontFamily: "poppins-regular" }}>
                Current Balance
              </Text>
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
              <Text style={{ color: "white", fontFamily: "poppins-regular" }}>
                Weekly Profit
              </Text>
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
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            paddingVertical: 20,
            paddingHorizontal: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            Grafik Perkembangan
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 8,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Pressable
                onPress={() => setFilter("Week")}
                style={[
                  style.grafikMenu,
                  {
                    backgroundColor: filter == "Week" ? "blue" : "white",
                    borderWidth: filter == "Week" ? 0 : 1,
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: filter == "Week" ? "white" : "black",
                  }}
                >
                  1 Week
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setFilter("Month")}
                style={[
                  style.grafikMenu,
                  {
                    backgroundColor: filter == "Month" ? "blue" : "white",
                    borderWidth: filter == "Month" ? 0 : 1,
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: filter == "Month" ? "white" : "black",
                  }}
                >
                  1 Month
                </Text>
              </Pressable>
              <Pressable
                onPress={() => setFilter("Year")}
                style={[
                  style.grafikMenu,
                  {
                    backgroundColor: filter == "Year" ? "blue" : "white",
                    borderWidth: filter == "Year" ? 0 : 1,
                  },
                ]}
              >
                <Text
                  style={{
                    fontSize: 10,
                    color: filter == "Year" ? "white" : "black",
                  }}
                >
                  1 Year
                </Text>
              </Pressable>
            </View>
            <Pressable style={style.coinTypes}>
              <Text style={{ color: "white", fontSize: 10, marginRight: 6 }}>
                Bitcoin
              </Text>
              <SVGDropDown width={8} height={4} />
            </Pressable>
          </View>
          <Chart
            style={{ height: 200, width: "100%" }}
            data={[
              { x: 1, y: 3.9 },
              { x: 2, y: 6.1 },
              { x: 3, y: 12.0 },
              { x: 4, y: 5.5 },
              { x: 5, y: 12.1 },
              { x: 6, y: 15.0 },
              { x: 7, y: 7.7 },
            ]}
            padding={{ left: 0, bottom: 0, right: 0, top: 8 }}
            xDomain={{ min: 1, max: 7 }}
            yDomain={{ min: 0, max: 20 }}
          >
            <VerticalAxis
              tickCount={5}
              theme={{
                axis: { stroke: { color: "transparent" } },
                ticks: { stroke: { color: "transparent" } },
              }}
            />
            <HorizontalAxis
              tickCount={7}
              theme={{
                axis: { stroke: { color: "transparent" } },
                ticks: { stroke: { color: "transparent" } },
              }}
            />
            <Area
              theme={{
                gradient: {
                  from: {
                    color: "#1D1CE5",
                    opacity: 0.1,
                  },
                  to: { color: "#1D1CE5", opacity: 0 },
                },
              }}
              smoothing="bezier"
              tension={0.1}
            />
            <Line
              theme={{
                stroke: { color: "#1D1CE5", width: 2 },
                scatter: {
                  default: { width: 4, height: 4, color: "#1D1CE5" },
                },
              }}
              smoothing="bezier"
              tension={0.1}
            />
          </Chart>
        </View>
        <View
          style={{
            backgroundColor: "white",
            width: "100%",
            marginTop: 8,
            paddingVertical: 20,
          }}
        >
          <Text
            style={{ paddingHorizontal: 16, fontSize: 16, fontWeight: "bold" }}
          >
            Statics
          </Text>
          {StaticsData.map((data, id) => (
            <View key={id} style={style.staticsList}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ marginRight: 4, fontSize: 12 }}>
                  {data.title}
                </Text>
                <SVGInfo width={8} height={9} />
              </View>
              <Text style={{ fontSize: 14 }}>{`Rp.${data.price}`}</Text>
            </View>
          ))}
        </View>
        <View
          style={{
            width: "100%",
            paddingVertical: 20,
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Pressable
            style={{
              paddingVertical: 8,
              paddingHorizontal: 60,
              backgroundColor: "#FFB9B9",
              borderRadius: 18,
              elevation: 1,
            }}
          >
            <Text
              style={{ color: "#FF4646", fontSize: 16, fontWeight: "bold" }}
            >
              Sell
            </Text>
          </Pressable>
          <Pressable
            style={{
              paddingVertical: 8,
              paddingHorizontal: 60,
              backgroundColor: "#4649FF",
              borderRadius: 18,
              elevation: 1,
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Buy
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  grafikMenu: {
    marginRight: 4,
    paddingHorizontal: 8,
    paddingVertical: 1,
    borderRadius: 10,
    borderColor: "black",
  },
  coinTypes: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 20,
    backgroundColor: "#4649FF",
  },
  staticsList: {
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 2,
  },
});
