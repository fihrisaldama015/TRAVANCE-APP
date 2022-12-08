// In App.js in a new project

import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import Routes from "routes";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";
import "expo-dev-client";
import { onAuthStateChangedListener } from "utils/firebase.utils";

function App() {
  SplashScreen.preventAutoHideAsync();
  const [fontsLoaded] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("!fontloaded");
    return null;
  }

  return (
    <>
      <View onLayout={onLayoutRootView} style={{ height: "100%" }}>
        <StatusBar backgroundColor="white" />
        <Routes />
      </View>
    </>
  );
}

export default App;
