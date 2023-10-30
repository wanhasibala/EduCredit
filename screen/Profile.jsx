import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileCard from "../components/ProfileCard";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 20,
          width: "100%",
          alignItems: "center",
          gap: 120,
        }}
      >
        <View
          style={{ padding: 5, backgroundColor: "#eaeaea", borderRadius: 20 }}
        >
          <Ionicons name="chevron-back" size={24} />
        </View>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Profile</Text>
      </View>
      <ProfileCard />
      <Text>anjay</Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
