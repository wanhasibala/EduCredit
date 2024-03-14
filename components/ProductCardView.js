import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductDetails } from "../screen";
import { COLORS } from "../constants/theme";

const ProductCardView = ({ title, image, mentor, duration, mentorImage }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.item}>
        <Image
          source={{uri: `${image}`}}
          resizeMode="cover"
          style={styles.imageCard}
        />
        <Text
          numberOfLines={1}
          style={{
            fontSize: 24,
            fontWeight: "bold",
            width: 200,
          }}
        >
          {title}
        </Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Image source={{uri: `${mentorImage}`}} style={styles.profilePicture} />
          <Text style={{ fontSize: 16 }}>{mentor}</Text>
        </View>
        <Text style={{ fontSize: 16 }}>{duration}</Text>
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
    borderColor: COLORS.gray,
    borderWidth: .25,
    shadowColor: "#000000",
    shadowOffset: { object: { width: 0.5, height: 0 } },
    shadowOpacity: 0.25,
    marginBottom: 20,
    gap: 5
  },
  imageCard: {
    width: 200,
    height: 150,
    borderRadius: 5,
  },
  profilePicture: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
});
