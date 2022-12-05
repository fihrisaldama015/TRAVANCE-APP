import { View, Text, Pressable, FlatList, Image } from "react-native";
import Constants from "expo-constants";
import CardContent from "components/molecules/cardContent";
import gambarContoh from "assets/img/unsplash_5hcV51EeeWc.png";
import { CommentIcon, FollowerSvg, LikeIcon, ThumbIcon } from "components/atoms/SVG";
export default function CommunityCard({ name, bg, logo }) {
  return (
    <>
      <View style={{ marginRight: 10 }}>
        <View style={{ position: "relative", overflow: "hidden", width: 170, height: 170, elevation: 1, borderRadius: 10, backgroundColor: "white" }}>
          <View style={{ height: 110, backgroundColor: "grey", position: "relative" }}>
            <Image source={bg} />
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                position: "absolute",
                overflow: "hidden",
                height: 36,
                width: 36,
                backgroundColor: "white",
                bottom: -18,
                left: 85 - 18,
                borderRadius: 10,
              }}
            >
              <Image style={{ width: 30, height: 30, borderRadius: 8 }} source={logo} />
            </View>
          </View>
          <View style={{ display: "flex", alignItems: "center" }}>
            <Text style={{ marginTop: 16, fontWeight: "800", fontSize: 16, fontFamily: "poppins-regular" }}>{name}</Text>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 1 }}>
              <FollowerSvg style={{ marginHorizontal: 3 }} />
              <Text style={{ fontSize: 8, fontFamily: "poppins-regular" }}> 2.000 member</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
