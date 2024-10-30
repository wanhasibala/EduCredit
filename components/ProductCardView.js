import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ProductDetails } from "../screen";
import { COLORS } from "../constants/theme";

const ProductCardView = ({
  title,
  image,
  mentor,
  duration,
  mentorImage,
  item,
}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("ProductDetails", { course: item })}
    >
      <View style={styles.item}>
        <Image
          source={{ uri: `${image}` }}
          resizeMode="cover"
          style={styles.imageCard}
        />
        <Text
          numberOfLines={2}
          style={{
            fontSize: 24,
            fontWeight: 600,
            width: 320,
          }}
        >
          {title}
        </Text>
        <View style={{ flexDirection: "row", gap: 4 }}>
          <Image
            source={{ uri: `${mentorImage}` }}
            style={styles.profilePicture}
          />
          <Text style={{ fontSize: 14 }}>{mentor}</Text>
        </View>
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 2,
            borderRadius: 99,
            backgroundColor: COLORS.primary,
            // alignSelf: "flex-start",
          }}
        >
          <Text style={{ fontSize: 12 }}>{duration}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCardView;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    marginRight: 20,
    marginVertical: 8,
    borderRadius: 10,
    borderColor: COLORS.gray,
    borderWidth: 0.25,
    // shadowColor: "#000000",
    // shadowOffset: { object: { width: 0.5, height: 0 } },
    // shadowOpacity: 0.25,
    marginBottom: 20,
    gap: 5,
  },
  imageCard: {
    width: 320,
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
