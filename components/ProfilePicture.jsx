import { View, Text, Image, Pressable, StyleSheet} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProfilePicture = () => {
    const navigation = useNavigation()
  return (
    <Pressable onPress={()=>{navigation.navigate("Profile")}}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.HeaderProfile}
      />
    </Pressable>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
    HeaderProfile: {
      width: 45,
      height: 45,
      borderRadius: 56,
      paddingTop: 20,
    },
})
