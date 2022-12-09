import { async } from "@firebase/util";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { signOutUser } from "utils/firebase.utils";

import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import SVGProfile from "../../assets/svg/profile.svg";
import SVGHistory from "../../assets/svg/history.svg";
import SVGWallet from "../../assets/svg/wallet.svg";
import SVGNotification from "../../assets/svg/notification.svg";
import SVGSecurity from "../../assets/svg/security.svg";
import SVGHelp from "../../assets/svg/help.svg";
import SVGTerms from "../../assets/svg/terms.svg";
import SVGLogout from "../../assets/svg/logout.svg";
import SVGArrow from "../../assets/svg/arrow.svg";

export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <SafeAreaView style={style.container}>
        <LinearGradient
          style={style.profileCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1.2 }}
          locations={[0.5, 1]}
          colors={["#4650FF", "#C47AFFB5"]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
              padding: 16,
              flex: 1,
            }}
          >
            <SVGProfile width={80} height={80} />
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
              <Text style={style.username}>Sample User Name</Text>
              <Text style={style.userEmail}>usersample@gmail.com</Text>
              <View style={style.saldoSection}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 14,
                    fontWeight: "700",
                    fontFamily: "poppins-regular",
                  }}
                >
                  Saldo :{" "}
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 22,
                    fontWeight: "bold",
                    fontFamily: "poppins-regular",
                  }}
                >
                  Rp. 116,95
                </Text>
              </View>
              <View style={style.profitSection}>
                <Text
                  style={{
                    color: "white",
                    marginRight: 4,
                    fontSize: 14,
                    fontFamily: "poppins-regular",
                  }}
                >
                  Profit
                </Text>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 32,
                    paddingVertical: 4,
                    paddingHorizontal: 8,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    +21.00%
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
        <View style={style.optionMenu}>
          <View style={{ flexDirection: "row" }}>
            <SVGHistory width={24} height={24} style={{ marginRight: 12 }} />
            <Text style={style.optionTitle}>History</Text>
          </View>
          <SVGArrow width={8} height={16} />
        </View>
        <View style={style.optionMenu}>
          <View style={{ flexDirection: "row" }}>
            <SVGWallet width={24} height={20} style={{ marginRight: 12 }} />
            <Text style={style.optionTitle}>Wallet</Text>
          </View>
          <SVGArrow width={8} height={16} />
        </View>
        <View style={style.optionMenu}>
          <View style={{ flexDirection: "row" }}>
            <SVGNotification
              width={24}
              height={24}
              style={{ marginRight: 12 }}
            />
            <Text style={style.optionTitle}>Notification</Text>
          </View>
          <SVGArrow width={8} height={16} />
        </View>
        <View style={style.optionMenu}>
          <View style={{ flexDirection: "row" }}>
            <SVGSecurity width={24} height={24} style={{ marginRight: 12 }} />
            <Text style={style.optionTitle}>Security</Text>
          </View>
          <SVGArrow width={8} height={16} />
        </View>
        <View style={style.optionMenu}>
          <View style={{ flexDirection: "row" }}>
            <SVGHelp width={24} height={24} style={{ marginRight: 12 }} />
            <Text style={style.optionTitle}>Help & Support</Text>
          </View>
          <SVGArrow width={8} height={16} />
        </View>
        <View style={style.optionMenu}>
          <View style={{ flexDirection: "row" }}>
            <SVGTerms width={20} height={24} style={{ marginRight: 12 }} />
            <Text style={style.optionTitle}>Terms and Conditions</Text>
          </View>
          <SVGArrow width={8} height={16} />
        </View>
        <Pressable
          onPress={() => {
            signOutUser();
          }}
        >
          <View style={style.optionMenu}>
            <View style={{ flexDirection: "row" }}>
              <SVGLogout width={28} height={28} style={{ marginRight: 12 }} />
              <Text style={style.optionTitle}>Log Out</Text>
            </View>
          </View>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#e5e5e5",
    height: "100%",
  },
  profileCard: {
    backgroundColor:
      "linear-gradient(180deg, #4650FF 68.23%, rgba(196, 122, 255, 0.71) 100%);",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 130,
  },
  optionMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderBottomColor: "rgba(0, 0, 0, 0.1)",
    borderBottomWidth: 2,
    paddingLeft: 20,
    paddingRight: 28,
    paddingVertical: 24,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "poppins-regular",
  },
  saldoSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  profitSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "poppins-regular",
    color: "white",
  },
  userEmail: {
    fontSize: 12,
    color: "white",
    fontWeight: "300",
    fontFamily: "poppins-regular",
    paddingBottom: 4,
    lineHeight: 14,
  },
});
