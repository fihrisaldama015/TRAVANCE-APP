// In App.js in a new project

import * as React from "react";
import { useCallback } from "react";
import Routes from "routes";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

function App() {
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
