import { View, Text, Button, Pressable, TextInput, StyleSheet, KeyboardAvoidingView, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SVGDefaultProfile from "../../assets/svg/default-profile.svg";
import SVGArrow from "../../assets/svg/arrowLeft.svg";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { async } from "@firebase/util";
export default function PortofolioScreen({ navigation }) {
  const [userName, onChangeUserName] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 0,
        backgroundColor: "white",
        alignItems: "center",
        height: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 18,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <SVGArrow onPress={() => navigation.navigate("Main/Home")} width={20} height={20} />
          <Text
            style={{
              marginLeft: 8,
              fontSize: 20,
              fontWeight: "bold",
              fontFamily: "poppins-regular",
            }}
          >
            Lengkapi Profilmu
          </Text>
        </View>
        <Pressable onPress={() => navigation.navigate("Main/Home")}>
          <Text
            style={{
              fontSize: 16,
              color: "#548CFF",
              fontWeight: "bold",
              fontFamily: "poppins-regular",
            }}
          >
            Lewati
          </Text>
        </Pressable>
      </View>
      <ScrollView style={{ width: "100%", paddingHorizontal: 18 }}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={-500}>
          <View style={{ marginVertical: 36, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <SVGDefaultProfile width={200} height={200} />
          </View>
          <View style={{ width: "100%" }}>
            <View style={style.inputStyle}>
              <TextInput placeholder="Nama Lengkap" />
            </View>
            <View style={style.inputStyle}>
              <TextInput
                placeholder="Nama Pendek"
                onChangeText={(input) => {
                  onChangeUserName(input);
                }}
              />
            </View>
            <View style={style.inputStyle}>
              <TextInput placeholder="Tanggal Lahir" />
            </View>
            <View style={style.inputStyle}>
              <TextInput placeholder="Email" />
            </View>
            <View style={style.inputStyle}>
              <TextInput placeholder="No HP" />
            </View>
            <View style={style.inputStyle}>
              <TextInput placeholder="Gender" />
            </View>
            <View style={{ alignItems: "center" }}>
              <Pressable
                onPress={() => {
                  const saveUsername = async () => {
                    await AsyncStorage.setItem("username", userName);
                  };
                  saveUsername();
                  navigation.navigate("Main/Home");
                }}
                style={style.continueButton}
              >
                <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  inputStyle: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#F3F3F3",
    height: 40,
    marginBottom: 24,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  continueButton: {
    width: "80%",
    backgroundColor: "#548CFF",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "blue",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 18,
  },
});
