import { View, Text, Pressable, ScrollView } from "react-native";
import CardContent from "components/molecules/cardContent";
import CommunityCard from "components/molecules/CommunityCard";
import Post from "components/molecules/Post";

export default function SocialCommunityScreen({ navigation }) {
  const listCommunity = [
    { community_name: "Abstract", logo: require("assets/img/l1.png"), bg: require("assets/img/c1.png") },
    { community_name: "Figma", logo: require("assets/img/l2.png"), bg: require("assets/img/c2.png") },
    { community_name: "Figma", logo: require("assets/img/l2.png"), bg: require("assets/img/c2.png") },
  ];
  const Item = () => <CardContent />;
  const renderItem = ({ item }) => <Item />;
  const ChoseComp = () => {
    return (
      <View style={{ display: "flex", flexDirection: "row", marginVertical: 10, paddingHorizontal: 14 }}>
        <Pressable onPress={() => {}}>
          <View style={{ backgroundColor: "#4649FF", borderRadius: 10, padding: 4, width: 56, height: 26, display: "flex", justifyContent: "center", alignItems: "center", bordeRadius: 10 }}>
            <Text style={{ color: "white", fontWeight: "600", fontSize: 10 }}>Articles</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => {}}>
          <View style={{ backgroundColor: "white", width: 56, height: 26, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 10, marginLeft: 10 }}>
            <Text style={{ color: "black", fontWeight: "600", fontSize: 10 }}>Videos</Text>
          </View>
        </Pressable>
      </View>
    );
  };
  return (
    <ScrollView>
      {/* Communities Section */}
      <View style={{ display: "flex" }}>
        {/* Top Communities Title */}
        <View style={{ paddingLeft: 10, paddingTop: 20 }}>
          <Text style={{ fontSize: 14, fontWeight: "700" }}>Top Communities</Text>
        </View>

        {/* Top Communities  cards container */}
        <View>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{ marginTop: 20, paddingLeft: 10, display: "flex", flexDirection: "row", overflow: "scroll" }}>
            {/* Community Card */}
            {listCommunity.map((community, i) => {
              return <CommunityCard key={i} name={community.community_name} bg={community.bg} logo={community.logo} />;
            })}
          </ScrollView>
        </View>
      </View>
      {/* Tittle Trending Post */}
      <View style={{ marginTop: 20, paddingLeft: 10, marginBottom: 20 }}>
        <Text style={{ fontWeight: "700" }}>Trending Post</Text>
      </View>
      {/* Post */}
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
}
