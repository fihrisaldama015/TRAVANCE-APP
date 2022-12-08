import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaView } from "react-native-safe-area-context";
import CryptoScreen from "./crypto";
import MoneyScreen from "./money";

const Tab = createMaterialTopTabNavigator();

export default function StrategyScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator>
        <Tab.Screen name="Crypto" component={CryptoScreen} />
        <Tab.Screen name="Money" component={MoneyScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
