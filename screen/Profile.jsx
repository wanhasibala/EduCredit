import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ProfileCard from "../components/ProfileCard";
import { Ionicons } from "@expo/vector-icons";
import List from "../components/List";

const Profile = () => {
  return (
    <SafeAreaView style={{ paddingTop: 20 }}>
      {/* Header */}
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
      {/* Settings & Info  */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>SETTINGS & INFO</Text>
        <View
          style={{
            width: "100",
            marginTop: 20,
            backgroundColor: "white",
            shadowColor: "#000000",
            shadowOffset: { width: 3, height: 2 },
            shadowOpacity: 0.1,
            borderRadius: 8,
          }}
        >
          <List icon="card" setting="Payment Method" />
          <List icon="finger-print" setting="Change Password" />
          <List icon="help-circle" setting="Get Help" />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              padding: 10,
              gap: 5,
            }}
          >
            <Ionicons name="log-out" size={20} color={"#EE8375"}/>
            <Text style={{ fontSize: 16, width: "85%",color: "#EE8375" }}>Log out</Text>
            <Ionicons name="chevron-forward" size={16} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  
});
