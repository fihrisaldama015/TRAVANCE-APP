import { View, Text, Pressable, StyleSheet } from "react-native";
import SVGPlus from "../../assets/svg/plus.svg";
import StrategyCard from "components/molecules/strategyCard";
import { DATA } from "./data";
import { useState } from "react";
export default function CryptoScreen() {
  const [filter, setFilter] = useState("All");
  const [filteredData, setFilteredData] = useState(DATA);
  const filterStrategy = (status) => {
    status == "All"
      ? setFilteredData(DATA)
      : setFilteredData(DATA.filter((data) => data.status == `${status}`));
    setFilter(status);
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingVertical: 12,
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Crypto Strategy
        </Text>
        <SVGPlus width={22} height={22} />
      </View>
      <View
        style={{
          paddingVertical: 16,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Pressable
          style={[
            style.category,
            { backgroundColor: filter == "All" ? "#4649FF" : "white" },
          ]}
          onPress={() => filterStrategy("All")}
        >
          <Text style={{ color: filter == "All" ? "white" : "black" }}>
            All
          </Text>
        </Pressable>
        <Pressable
          style={[
            style.category,
            { backgroundColor: filter == "Running" ? "#4649FF" : "white" },
          ]}
          onPress={() => filterStrategy("Running")}
        >
          <Text style={{ color: filter == "Running" ? "white" : "black" }}>
            Running
          </Text>
        </Pressable>
        <Pressable
          style={[
            style.category,
            { backgroundColor: filter == "Paused" ? "#4649FF" : "white" },
          ]}
          onPress={() => filterStrategy("Paused")}
        >
          <Text style={{ color: filter == "Paused" ? "white" : "black" }}>
            Paused
          </Text>
        </Pressable>
        <Pressable
          style={[
            style.category,
            { backgroundColor: filter == "Finished" ? "#4649FF" : "white" },
          ]}
          onPress={() => filterStrategy("Finished")}
        >
          <Text style={{ color: filter == "Finished" ? "white" : "black" }}>
            Finished
          </Text>
        </Pressable>
      </View>
      <View style={{ width: "100%" }}>
        {filteredData.map((cardContent, id) => (
          <StrategyCard data={cardContent} key={id} />
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  category: {
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 20,
    elevation: 1,
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
  },
  profitCard: {
    color: "white",
  },
});
