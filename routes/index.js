// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import { HomeSvg, PortofolioSvg, ProfileSvg, SocialSvg, StrategySvg } from "assets/svg/Tab";
import PortofolioScreen from "screens/Portofolio";
import SocialScreen from "screens/Social";
import StrategyScreen from "screens/Strategy";
import ProfileScreen from "screens/Profile";

function Routes() {
  return (
    <>
      <NavigationContainer>
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
            component={SocialScreen}
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
      </NavigationContainer>
    </>
  );
}

export default Routes;
