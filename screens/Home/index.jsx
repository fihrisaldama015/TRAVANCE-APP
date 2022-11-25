import { View, Text, StyleSheet, Image, Pressable, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Line } from "react-native-svg";
import profileImage from "assets/img/profile.png";
export default function HomeScreen() {
  return (
    <View style={{ paddingTop: 50, paddingHorizontal: 18 }}>
      <View>
        <View style={{}}>
          <Text style={{ fontWeight: "800", fontSize: 16, fontFamily: "poppins-regular" }}>Sample User Name</Text>
        </View>
        <View style={{ marginTop: 2 }}>
          <Text style={{ fontSize: 12, fontWeight: "400", fontFamily: "poppins-regular" }}>Wellcome Back</Text>
        </View>
      </View>
      {/* container current balance and profile */}
      <View style={{ display: "flex", width: "100%", alignItems: "center", marginTop: 20, position: "relative" }}>
        {/* current balance container */}
        <View style={{ position: "absolute", width: 60, height: 60, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "white", top: -30, zIndex: 2, borderRadius: 20 }}>
          <View style={{ width: 40, height: 40, backgroundColor: "black", borderRadius: 10, overflow: "hidden", display: "flex", alignItems: "center" }}>
            <Image source={profileImage} />
          </View>
        </View>
        <LinearGradient colors={["#4650FF", "#C47AFFB5"]} style={{ height: 170, width: 280, backgroundColor: "blue", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <View>
            <Text style={{ color: "white", fontFamily: "poppins-regular" }}>Current Balance</Text>
          </View>
          <View style={{ marginBottom: 6 }}>
            <Text style={{ color: "white", fontFamily: "poppins-regular", fontWeight: "700", fontSize: 22 }}>Rp. 116, 95</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={{ color: "white", fontFamily: "poppins-regular" }}>Weekly Profit</Text>
            <View style={{ backgroundColor: "white", marginHorizontal: 5, paddingVertical: 2, paddingHorizontal: 4, borderRadius: 10 }}>
              <Text style={{ fontWeight: "bold" }}>+21.00%</Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      {/*content */}
      <View style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
        <Pressable
          onPress={() => {
            console.log("its pressed");
          }}
        >
          <View style={{ backgroundColor: "#4649FF", padding: 4, width: 56, height: 26, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 10 }}>Articles</Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            console.log("it's pressed");
          }}
        >
          <View style={{ backgroundColor: "white", width: 56, height: 26, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, marginLeft: 10 }}>
            <Text style={{ color: "black", fontWeight: "600", fontSize: 10 }}>Videos</Text>
          </View>
        </Pressable>
      </View>
      {/* container card */}
      <View>
        {/* card */}
        <View style={{ position: "relative", elevation: 5, width: 170, height: 206, backgroundColor: "white", borderRadius: 10, display: "flex", overflow: "hidden" }}>
          <View style={{ flex: 1, backgroundColor: "gray", flexShrink: 0 }}></View>
          <View style={{ flex: 1, paddingTop: 14, paddingHorizontal: 10 }}>
            <Text style={{ fontFamily: "poppins-regular", fontSize: 11 }}>Investasi Untuk Pemula : 10 Hal yang harus dihindari investor pemula </Text>
          </View>
          <View style={{ position: "absolute", bottom: 0, paddingHorizontal: 10 }}>
            <View>
              <Text style={{ fontFamily: "poppins-regular", fontSize: 10, color: "#8F8F8F" }}>6 Mins Read</Text>
            </View>
            <View></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tes: {},
  text: {},
  title: {},
});
