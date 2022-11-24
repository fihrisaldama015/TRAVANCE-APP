import { StyleSheet, Text, View, Image } from "react-native";
import gambar from "assets/img/favicon.png";

export default function Tess() {
  return (
    <View style={styles.container}>
      <Text>tess</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
