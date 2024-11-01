import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ProfileCard = () => {
  return (
    <>
      <View
        style={{
          width: "90%",
          height:260,
          alignSelf: "flex-start",
          
          margin: 20,
          borderRadius: 20,
          backgroundColor: "#367A59",
          
        }}
      >
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <View></View>
          <View style={{ flexDirection: "row", alignItems: "center", alignSelf: "" }}>
            <Text style={{ fontSize: 12, fontWeight: "400", color: "#FFEFCC" }}>
              Payment History
            </Text>
            <Ionicons name="chevron-forward" color="white" size={12} />
          </View>
        </View>
        <View style={styles.ProfileCard}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 40,
            }}
          />
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Wan Hasib Al Aslamy
          </Text>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            +62 8953 37443659
          </Text>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            wanhasibal1122@gmail.com
          </Text>
          <View style={styles.Member}>
            <Text>Tagihan</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{fontSize: 12}}>Rp.1.500.000 </Text>
              <Ionicons name="chevron-forward" size={16} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileCard;
const styles = StyleSheet.create({
  ProfileCard: {
    backgroundColor: "#090909",
    flex: 1,
    borderRadius: 20,
    padding: 20,
    gap: 5,
    alignItems: "center",
  },
  Member: {
    width: "100%",
    backgroundColor: "#F9F8F8",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 20,
  },
});
