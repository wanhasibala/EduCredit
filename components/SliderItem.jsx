import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
} from "react-native";
import { COLORS } from "../constants/theme";

const { width } = Dimensions.get("screen");
export const SliderItem = ({ item, index }) => {
  return (
    <Pressable style={styles.itemContainer} onPress={()=> {}}>
        <Image
          source={{ uri: item.image }}
          width={320}
          height={171}
          style={{ borderRadius: 20, backgroundColor: "black" }}
        />
      <View style={styles.duration}>
        <Text style={{ color: "white", fontSize: 14 }}> {item.duration}</Text>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    width: width,
  },

  duration: {
    backgroundColor: COLORS.tertiary,
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: "absolute",
    bottom: 10,
    left: "15%",
    borderRadius: 99,
  },
});
