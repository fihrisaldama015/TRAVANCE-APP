import { View, Text, Pressable, FlatList, Image } from "react-native";
import Constants from "expo-constants";
import CardContent from "components/molecules/cardContent";
import gambarContoh from "assets/img/unsplash_5hcV51EeeWc.png";
import { CommentIcon, FollowerSvg, LikeIcon, ThumbIcon } from "components/atoms/SVG";

export default function SocialScreen() {
  const DATA = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14];
  const Item = () => <CardContent />;
  const renderItem = ({ item }) => <Item />;
  const ChoseComp = () => {
    return (
      <View style={{ display: "flex", flexDirection: "row", marginVertical: 10, paddingHorizontal: 14 }}>
        <Pressable
          onPress={() => {
            console.log("its pressed");
          }}
        >
          <View style={{ backgroundColor: "#4649FF", borderRadius: 10, padding: 4, width: 56, height: 26, display: "flex", justifyContent: "center", alignItems: "center", bordeRadius: 10 }}>
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
    );
  };
  return (
    <View style={{ marginTop: Constants.statusBarHeight }}>
      {/* comp header */}
      <View style={{ display: "flex", flexDirection: "row", width: "100%", height: 40, backgroundColor: "white" }}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderBottomColor: "blue", borderBottomWidth: 2 }}>
          <Pressable
            onPress={() => {
              console.log("click");
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: "poppins-regular", fontWeight: "700" }}>Community</Text>
          </Pressable>
        </View>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Pressable
            onPress={() => {
              console.log("click");
            }}
          >
            <Text style={{ fontSize: 14, fontFamily: "poppins-regular", fontWeight: "700" }}>Education</Text>
          </Pressable>
        </View>
      </View>
      {/* <FlatList ListHeaderComponent={ChoseComp} data={DATA} renderItem={renderItem} keyExtractor={(item) => item} horizontal={false} numColumns={2} /> */}

      {/* choose */}
      <View style={{ display: "flex", alignItems: "center", paddingBottom: 80 }}>
        <View style={{ width: "100%" }}>
          <View>
            <Text>Top Communities</Text>
          </View>
          {/* cards */}
          <View>
            <View style={{ position: "relative", overflow: "hidden", width: 170, height: 170, elevation: 1, borderRadius: 10, backgroundColor: "white" }}>
              <View style={{ height: 110, backgroundColor: "grey", position: "relative" }}>
                <Image source={gambarContoh} />
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
                  <Image style={{ width: 30, height: 30, borderRadius: 8 }} source={gambarContoh} />
                </View>
              </View>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Text style={{ marginTop: 16, fontWeight: "800", fontSize: 16, fontFamily: "poppins-regular" }}>Figma</Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 1 }}>
                  <FollowerSvg style={{ marginHorizontal: 3 }} />
                  <Text style={{ fontSize: 8, fontFamily: "poppins-regular" }}> 2.000 member</Text>
                </View>
              </View>
            </View>
          </View>
          {/* trending post */}
        </View>
      </View>
      {/* Trending post */}
      <View>
        <Text>Trending Post</Text>
      </View>
      {/* post */}
      <View style={{ display: "flex", backgroundColor: "white", paddingVertical: 12 }}>
        <View style={{ paddingLeft: 10, display: "flex", flexDirection: "row" }}>
          <View style={{ height: 30, width: 30, borderRadius: 9999999, backgroundColor: "gray" }}></View>
          <View style={{ marginLeft: 4 }}>
            <Text style={{ fontWeight: "700" }}>Theresa Henry</Text>
            <Text style={{ color: "#BFBFBF" }}>2D</Text>
          </View>
        </View>
        <View style={{ marginLeft: 41 }}>
          <Text style={{ fontWeight: "700" }}>@BRIS @IHSG @ANTM</Text>
          <View style={{ marginTop: 5 }}>
            <View style={{ width: 310, height: 160, backgroundColor: "gray", borderRadius: 10 }}></View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ fontSize: 12, width: 310 }}>Hi, is the API possible to retrieve the role either is Viewer or Contributor? Additional : If Can, is it able to show the last Commit date of the Contributor?</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 40, marginTop: 10, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
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
    </View>
  );
}
