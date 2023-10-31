import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import ProfileCard from "../components/ProfileCard";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView>
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
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Profile Settings</Text>
            <Ionicons name="chevron-forward" size={16} />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Security Settings</Text>
            <Ionicons name="chevron-forward" size={16} />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Resulation Center</Text>
            <Ionicons name="chevron-forward" size={16} />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 16 }}>Help Center</Text>
            <Ionicons name="chevron-forward" size={16} />
          </View>
        </View>
      </View>
      {/* Reward */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}> REWARD</Text>
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
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 10,
              alignItems: "center",
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Ionicons name="gift-outline" size={36} />
              <View>
                <Text style={{ fontSize: 16 }}>Kode Referal</Text>
                <Text style={{ fontSize: 12 }}>
                  Ajak teman pakai EduCredit & Dapatkan koin{" "}
                </Text>
                <Text style={{ fontSize: 12 }}>EduCredit Total Rp50Rb!</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={16} />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Ionicons name="code-slash" size={36} />
              <Text style={{ fontSize: 16 }}>Kode Promo</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} />
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
<Ionicons name="card" size={36}/>
            <Text style={{ fontSize: 16 }}>Promo Lain</Text>
            </View>
            <Ionicons name="chevron-forward" size={16} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
