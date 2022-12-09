// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeSvg, PortofolioSvg, ProfileSvg, SocialSvg, StrategySvg } from "components/atoms/SVG";
import PortofolioScreen from "screens/Portofolio";
import StrategyScreen from "screens/Strategy";
import ProfileScreen from "screens/Profile";
import SocialCommunityScreen from "screens/Social/community";
import SocialEducationScreen from "screens/Social/education";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Constants from "expo-constants";
import Login from "screens/Login";
import LoginEmailPassword from "screens/Login/EmailPassword";
import SignUpEmailPassword from "screens/Login/SignupEmailPassword";
import { useEffect, useState } from "react";
import { onAuthStateChangedListener } from "utils/firebase.utils";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const Social = () => {
  return (
    <TopTab.Navigator screenOptions={{ tabBarItemStyle: { marginTop: Constants.statusBarHeight }, tabBarLabelStyle: { fontSize: 12, fontWeight: "700" } }}>
      <TopTab.Screen options={{ headerShown: false, title: "Education" }} name="Social/Education" component={SocialEducationScreen} />
      <TopTab.Screen options={{ headerShown: false, title: "Community" }} name="Social/Community" component={SocialCommunityScreen} />
    </TopTab.Navigator>
  );
};

const InitialRoute = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return (
              <>
                <HomeSvg color={color} size={size} />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Social"
        component={Social}
        options={{
          headerShown: false,
          tabBarLabel: "Social",
          tabBarIcon: ({ color, size }) => {
            return (
              <>
                <SocialSvg color={color} size={size} />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Portofolio"
        component={PortofolioScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Portofolio",
          tabBarIcon: ({ color, size }) => {
            return (
              <>
                <PortofolioSvg color={color} size={size} />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Strategy"
        component={StrategyScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Strategy",
          tabBarIcon: ({ color, size }) => {
            return (
              <>
                <StrategySvg color={color} size={size} />
              </>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => {
            return (
              <>
                <ProfileSvg color={color} size={size} />
              </>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const LoginRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="login/index" component={Login} />
      <Stack.Screen options={{ title: "", headerShadowVisible: false, headerStyle: { height: 10 } }} name="login/email" component={LoginEmailPassword} />
      <Stack.Screen options={{ title: "", headerShadowVisible: false, headerStyle: { height: 10 } }} name="login/email/signup" component={SignUpEmailPassword} />
    </Stack.Navigator>
  );
};
function Routes() {
  const [user, setUser] = useState("");
  let [userName, setUserName] = useState("");
  useEffect(() => {
    onAuthStateChangedListener((usercatch) => {
      try {
        setUser(usercatch);
        const saveUser = async () => {
          await AsyncStorage.setItem("user_travance", JSON.stringify(usercatch));
        };
        saveUser();
      } catch (error) {
        console.log(error);
      }
    });
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        const userJSON = await AsyncStorage.getItem("user_travance");
        const user = JSON.parse(userJSON);
        const email = user.email;
        userName = email.split("@")[0];
        const saveUserName = async () => {
          try {
            await AsyncStorage.setItem("username", userName);
          } catch (error) {
            console.log("set error username :", error);
          }
        };
        saveUserName();
      } catch (error) {
        console.log("ERROR LOG :", error);
      }
    };
    getData();
  }, [user]);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>{!user ? <Stack.Screen options={{ headerShown: false }} name="login" component={LoginRoute} /> : <Stack.Screen options={{ headerShown: false }} name="initial" component={InitialRoute} />}</Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;
