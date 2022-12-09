import { View, Text, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SVGPortofolio from "../../assets/svg/portofolio.svg";
import SVGBitcoin from "../../assets/svg/bitcoin.svg";
import SVGLastSeen from "../../assets/svg/lastSeen.svg";
import StrategyCard from "components/molecules/strategyCard";
import { DATA } from "screens/Strategy/data";

export default function PortofolioScreen() {
  const CoinData = [
    {
      name: "Bitcoin",
      coin: "BTC",
      price: 11200,
      profit: -12.23,
      img: SVGBitcoin,
    },
    {
      name: "Ethereum",
      coin: "ETH",
      price: 8050,
      profit: -35.13,
      img: "",
    },
    {
      name: "Polkadot",
      coin: "DOT",
      price: 9400,
      profit: 28.4,
      img: "",
    },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
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
              paddingHorizontal: 16,
              paddingVertical: 12,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold", marginRight: 8 }}>
              My Portofolio
            </Text>
            <SVGPortofolio width={20} height={20} />
          </View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{
              flexDirection: "row",
              display: "flex",
            }}
          >
            {CoinData.map((coin, id) => (
              <View key={id} style={style.coinCard}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ marginBottom: 16 }}>
                    <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                      {coin.name}
                    </Text>
                    <Text style={{ color: "#BFBFBF" }}>{coin.coin}</Text>
                  </View>
                  {typeof coin.img == "function" ? (
                    <coin.img width={37} height={37} />
                  ) : null}
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{ fontSize: 24, fontWeight: "bold", width: 140 }}
                  >
                    Rp.{coin.price}
                  </Text>
                  <Text
                    style={{
                      backgroundColor: "#4649FF",
                      color: "white",
                      borderRadius: 10,
                      padding: 6,
                      fontSize: 10,
                    }}
                  >
                    {coin.profit > 0 ? "+" : null}
                    {coin.profit.toFixed(2)}%
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
          <View
            style={{
              width: "100%",
              paddingHorizontal: 16,
              paddingVertical: 12,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: 16,
              }}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold", marginRight: 8 }}
              >
                Last Seen
              </Text>
              <SVGLastSeen width={20} height={20} />
            </View>
            {DATA.map((cardContent, id) => (
              <StrategyCard data={cardContent} key={id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  coinCard: {
    padding: 16,
    marginVertical: 16,
    marginLeft: 16,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
