import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductDetails } from "../screen";
import { COLORS } from "../constants/theme";

const ProductCardView = ({title}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("ProductDetails")}>
        <View style={styles.item}>
          <View style={styles.imageCard}></View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <View style={{ flexDirection: "row", gap: 4 }}>
            <View style={styles.profilePicture}></View>
            <Text style={{ fontSize: 16 }}>mentor name</Text>
          </View>
          <Text style={{ fontSize: 16 }}>anjay timeline</Text>
        </View>
    </Pressable>
  );
};

export default ProductCardView;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9f9f9",
    padding: 8,
    marginRight: 20,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { object: { width: 0.5, height: 0 } },
    shadowOpacity: 0.25,
    marginBottom: 20,
  },
  imageCard: {
    width: 200,
    height: 150,
    backgroundColor: COLORS.primary,
  },
  profilePicture: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
});
