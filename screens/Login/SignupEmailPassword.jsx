import React, { useState } from "react";
import { View, Text, Image, Pressable, TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import Constants from "expo-constants";
import TravenceLogo from "assets/img/TLogo.png";
import getstartedimage from "assets/img/Get.png";
import { EmailIcon, EyePassIcon, FacebookIcon, GithubIcon, GoogleIcon, PassIcon } from "components/atoms/SVG";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createAuthUserWithEmailAndPassword, signInAuthUserWithEmailAndPassword } from "utils/firebase.utils";
import Toast from "react-native-toast-message";

export default function SignUpEmailPassword({ navigation }) {
  const [email, onChangeEmail] = useState("");
  const [pass, onChangePass] = useState("");
  const [visPass, setvisPass] = useState(false);
  const pressSignupButton = async () => {
    try {
      if (email !== "" && pass !== "") {
        await createAuthUserWithEmailAndPassword(email, pass);
        Toast.show({
          type: "success",
          text1: "Sign up success",
          text2: "",
          topOffset: 0,
        });
      } else {
        Toast.show({
          type: "error",
          text1: "field empty",
          text2: "fill email and password field",
          topOffset: 0,
        });
      }
    } catch (error) {
      let errorMessage = "";
      switch (error.code) {
        case "auth/invalid-email":
          errorMessage = "Invalid email";
          break;
        case "auth/email-already-in-use":
          errorMessage = "Email already use";
          break;
        default:
          errorMessage = "Error occured!!";
          break;
      }
      Toast.show({
        type: "error",
        text1: "Sign up failed",
        text2: errorMessage || error.code,
        topOffset: 0,
      });
    } finally {
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
      }}
      contentContainerStyle={{
        flexGrow: 1,
      }}
    >
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={-100}>
        <View
          style={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Image style={{ width: 180 }} source={TravenceLogo} />
          <Image style={{ marginTop: 8, marginBottom: 30 }} source={getstartedimage} />
          <View>
            <View
              style={{
                width: 300,
                borderRadius: 10,
                borderColor: "gray",
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                display: "flex",
                flexDirection: "row",
              }}
            >
              <EmailIcon style={{ marginRight: 5 }} />
              <TextInput style={{ width: 250 }} placeholder="Email" cursorColor={"gray"} onChangeText={onChangeEmail} value={email} />
            </View>
            <View
              style={{
                width: 300,
                borderRadius: 10,
                borderColor: "gray",
                height: 40,
                margin: 12,
                borderWidth: 1,
                padding: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <PassIcon style={{ marginRight: 5 }} />
                <TextInput
                  style={{ width: 200 }}
                  secureTextEntry={!visPass}
                  placeholder="Password"
                  cursorColor={"gray"}
                  onChangeText={(input) => {
                    onChangePass(input);
                  }}
                  value={pass}
                />
              </View>
              <View>
                <Pressable
                  onPress={() => {
                    visPass ? setvisPass(false) : setvisPass(true);
                  }}
                >
                  <EyePassIcon fill={visPass ? "black" : "gray"} />
                </Pressable>
              </View>
            </View>
          </View>
          {/* </ScrollView> */}

          {/* button sign in with email */}
          <View style={{ marginTop: 30 }}>
            <Pressable
              onPress={() => {
                pressSignupButton();
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
                <Text
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontFamily: "poppins-regular",
                    marginLeft: 10,
                  }}
                >
                  Sign up With Email & Password
                </Text>
              </View>
            </Pressable>
          </View>
          {/* or continue*/}
          <View style={{ marginVertical: 20 }}>
            <Text style={{ fontFamily: "poppins-regular", fontSize: 16 }}>Or Continue With </Text>
          </View>
          {/* login click container */}
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View
              style={{
                width: 56,
                height: 56,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FacebookIcon style={{ width: 15, height: 15 }} />
            </View>
            <View
              style={{
                marginHorizontal: 60,
                width: 56,
                height: 56,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GoogleIcon style={{ width: 15, height: 15 }} />
            </View>
            <View
              style={{
                width: 56,
                height: 56,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GithubIcon style={{ width: 15, height: 15 }} />
            </View>
          </View>
          {/* Dont have Account */}
          <View style={{ display: "flex", flexDirection: "row", marginTop: 24 }}>
            <Text>Have an account?</Text>
            <Pressable
              onPress={() => {
                navigation.navigate("login/email");
              }}
            >
              <Text style={{ color: "#004AAD", fontWeight: "800" }}> Sign in</Text>
            </Pressable>
          </View>
        </View>
        <Toast />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
