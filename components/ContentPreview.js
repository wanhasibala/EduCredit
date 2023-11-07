import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ContentPreview = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View
          style={{ padding: 5, borderRadius: 20, backgroundColor: "#2066A0" }}
        >
          <Ionicons name="caret-forward" size={16} color={"#FFB200"} />
        </View>
        <Text style={{ fontWeight: "600" }}>{title}</Text>
      </View>
      <Text style={{ fontWeight: "700" }}>02:03</Text>
    </View>
  );
};

export default ContentPreview;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    gap: 10,
    borderColor: "#C2C2C2",
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
