import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from "react-native-responsive-linechart";
function StrategyCard({ data }) {
  const cardTheme =
    data.status == "Running"
      ? "#00D816"
      : data.status === "Finished"
      ? "#FF4646"
      : "#4649FF";
  const profit = (data.chartData[9].y + 1) / (data.chartData[0].y + 1) - 1;
  return (
    <Pressable
      onPress={() => {
        console.log(data.title);
      }}
      style={style.card}
    >
      <View
        style={{
          backgroundColor: cardTheme,
          borderBottomLeftRadius: 10,
          borderTopLeftRadius: 10,
          width: 10,
        }}
      ></View>
      <View style={style.cardContent}>
        <View>
          <Text style={{ fontWeight: "bold" }}>{data.title}</Text>
          <Text style={{ color: cardTheme }}>{data.status}</Text>
        </View>
        <Chart
          style={{ height: 40, width: 80 }}
          data={data.chartData}
          //   padding={{ left: 40, bottom: 20, right: 40, top: 20 }}
          xDomain={{ min: 0, max: 10 }}
          yDomain={{ min: 0, max: 20 }}
        >
          <VerticalAxis
            tickCount={1}
            theme={{
              axis: { stroke: { color: "transparent" } },
            }}
          />
          <HorizontalAxis
            tickCount={1}
            theme={{
              axis: { stroke: { color: "transparent" } },
            }}
          />
          <Area
            theme={{
              gradient: {
                from: {
                  color: profit > 0 ? "#44bd32" : "#FF4646",
                  opacity: 0.3,
                },
                to: { color: profit > 0 ? "#44bd32" : "#FF4646", opacity: 0 },
              },
            }}
            smoothing="bezier"
            tension={0.3}
          />
          <Line
            theme={{
              stroke: { color: profit > 0 ? "#44bd32" : "#FF4646", width: 2 },
            }}
            smoothing="bezier"
            tension={0.3}
          />
        </Chart>
        <View>
          <Text style={{ fontWeight: "bold" }}>
            Rp.{(data.chartData[9].y * 1000).toFixed(0)}
          </Text>
          <Text
            style={{
              color: profit > 0 ? "#44bd32" : "#FF4646",
            }}
          >{`${profit > 0 ? "+" : ""}${(profit * 100).toFixed(2)}%`}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const style = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 16,
  },
  cardContent: {
    width: "97%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});

export default StrategyCard;
