import { View, Text, Pressable, FlatList, Image, ScrollView } from "react-native";
import Constants from "expo-constants";
import CardContent from "components/molecules/cardContent";
import gambarContoh from "assets/img/unsplash_5hcV51EeeWc.png";
import { CommentIcon, FollowerSvg, LikeIcon, ThumbIcon } from "components/atoms/SVG";
import CommunityCard from "components/molecules/CommunityCard";
export default function Post() {
  return (
    <View style={{ display: "flex", backgroundColor: "white", paddingVertical: 12 }}>
      <View style={{ paddingLeft: 10, display: "flex", flexDirection: "row" }}>
        <View style={{ height: 30, width: 30, borderRadius: 9999999, backgroundColor: "gray" }}>
          <Image source={require("assets/img/profilepost.png")} />
        </View>
        <View style={{ marginLeft: 8 }}>
          <Text style={{ fontWeight: "700" }}>Theresa Henry</Text>
          <Text style={{ color: "#BFBFBF" }}>2D</Text>
        </View>
      </View>
      <View style={{ marginLeft: 50 }}>
        <Text style={{ fontWeight: "700" }}>@BRIS @IHSG @ANTM</Text>
        <View style={{ marginTop: 5 }}>
          <View style={{ width: 310, height: 160, backgroundColor: "gray", borderRadius: 10, overflow: "hidden" }}>
            <Image source={require("assets/img/2.png")} style={{ width: "100%", height: "100%" }} />
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 12, width: 310 }}>Hi, is the API possible to retrieve the role either is Viewer or Contributor? Additional : If Can, is it able to show the last Commit date of the Contributor?</Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 50, marginTop: 10, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <LikeIcon />
          <Text style={{ marginLeft: 4, marginRight: 20 }}>30</Text>
          <CommentIcon />
          <Text style={{ marginLeft: 4 }}>30</Text>
        </View>
        <View>
          <View style={{ backgroundColor: "#BFBFBF", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 20 }}>
            <Text style={{ fontSize: 10, fontWeight: "700" }}>React</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
