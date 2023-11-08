import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const ItemPopular = ({ title }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.itemPopular}>
        <View style={styles.imageCardPopular}></View>
        <View style={{ gap: 5 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>{title}</Text>
          <View style={StyleSheet.create({ flexDirection: "row", gap: 4 })}>
            <View style={styles.profilePicture}></View>
            <Text style={{ fontSize: 16 }}>mentor name</Text>
          </View>
          <Text style={{ fontSize: 16 }}>anjay timeline</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ItemPopular;

const styles = StyleSheet.create({
  itemPopular: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
    padding: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#E0E0E0",
  },
  imageCardPopular: {
    width: 80,
    height: 80,
    backgroundColor: COLORS.primary,
    borderRadius: 5,
  },
  profilePicture: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
});
