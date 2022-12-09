import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import CryptoScreen from "./crypto";
import StackScreen from "./stock";

const Tab = createMaterialTopTabNavigator();

export default function StrategyScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="Stock" component={StackScreen} />
        <Tab.Screen name="Crypto" component={CryptoScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
