import { async } from "@firebase/util";
import { View, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { signOutUser } from "utils/firebase.utils";

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable
        onPress={async () => {
          await signOutUser();
        }}
      >
        <Text>Profile Screen</Text>
      </Pressable>
    </View>
  );
}
