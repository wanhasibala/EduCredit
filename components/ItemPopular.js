import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

const ItemPopular = ({ title, image, mentor, duration, mentorImage }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.itemPopular}>
        <Image source={{ uri: `${image}` }} style={styles.imageCardPopular} />
        <View style={{ gap: 5 }}>
          <Text
            numberOfLines={1}
            style={{ fontSize: 24, fontWeight: "bold", width: 250 }}
          >
            {title}
          </Text>
          <View style={StyleSheet.create({ flexDirection: "row", gap: 4 })}>
              <Image source={{uri: `${mentorImage}`}} style={styles.profilePicture}/>
            <Text style={{ fontSize: 16 }}>{mentor}</Text>
          </View>
          <Text style={{ fontSize: 16 }}>{duration} </Text>
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
    borderRadius: 5,
  },
  profilePicture: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
  },
});
