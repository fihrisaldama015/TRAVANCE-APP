import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Constants from "expo-constants";
import TravenceLogo from "assets/img/Tlog.png";
import { FacebookIcon, GithubIcon, GoogleIcon } from "components/atoms/SVG";
import { signInWithGooglePopup, signInWithGoogleRedirect } from "utils/firebase.utils";

export default function Login({ navigation }) {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={{ marginTop: Constants.statusBarHeight, display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <Image style={{ width: 225, height: 280 }} source={TravenceLogo} />
        {/* Continue Login Container */}
        <View style={{ marginTop: 10 }}>
          {/* Login with Facebook */}
          <View style={{ marginTop: 25 }}>
            <Pressable onPress={() => {}}>
              <View style={{ width: 300, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "gray", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 14 }}>
                <FacebookIcon />
                <Text style={{ fontWeight: "bold", fontFamily: "poppins-regular", marginLeft: 10 }}>Continue With Facebook </Text>
              </View>
            </Pressable>
          </View>
          {/* Login with Google*/}
          <View style={{ marginTop: 25 }}>
            <Pressable
              onPress={() => {
                // signInWithGooglePopup();
              }}
            >
              <View style={{ width: 300, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "gray", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 14 }}>
                <GoogleIcon />
                <Text style={{ fontWeight: "bold", fontFamily: "poppins-regular", marginLeft: 10 }}>Continue With Google </Text>
              </View>
            </Pressable>
          </View>
          {/* Login with Github */}
          <View style={{ marginTop: 25 }}>
            <Pressable onPress={() => {}}>
              <View style={{ width: 300, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderWidth: 1, borderColor: "gray", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 14 }}>
                <GithubIcon />
                <Text style={{ fontWeight: "bold", fontFamily: "poppins-regular", marginLeft: 10 }}>Continue With Github </Text>
              </View>
            </Pressable>
          </View>
        </View>
        {/* atau */}
        <Text style={{ fontWeight: "700", fontFamily: "poppins-regular", marginVertical: 22 }}>Atau</Text>
        {/* sign in with email and passowrd button */}
        <View style={{}}>
          <Pressable
            onPress={() => {
              navigation.push("login/email");
            }}
          >
            <View
              style={{
                width: 300,
                backgroundColor: "#4649FF",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderColor: "gray",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 14,
              }}
            >
              <Text style={{ color: "white", fontWeight: "700", fontFamily: "poppins-regular", marginLeft: 10 }}>Sign in With Email & Password</Text>
            </View>
          </Pressable>
        </View>
        {/* Dont have Account */}
        <View style={{ display: "flex", flexDirection: "row", marginTop: 24 }}>
          <Text> Don't have any account?</Text>
          <Pressable
            onPress={() => {
              navigation.navigate("login/email/signup");
            }}
          >
            <Text style={{ color: "#004AAD", fontWeight: "800" }}> Sign up</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
