import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ProfileCard = () => {
  return (
    <>
      <View
        style={{
          width: 325,
          height: 230,
          alignSelf: "center",
          marginTop: 20,
          borderRadius: 10,
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
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <View
              style={{
                padding: 2,
                backgroundColor: "#FFEFCC",
                borderRadius: 10,
              }}
            >
              <Ionicons name="star" color="#43936C" size={12} />
            </View>
            <Text style={{ fontSize: 20, fontWeight: "600", color: "#FFEFCC" }}>
              700
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ fontSize: 12, fontWeight: "400", color: "#FFEFCC" }}>
              History
            </Text>
            <Ionicons name="chevron-forward" color="white" size={12} />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#090909",
            flex: 1,
            borderRadius: 10,
            padding: 20,
            gap: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 40,
              backgroundColor: "white",
            }}
          />
          <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
            Wan Hasib Al Aslamy
          </Text>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
            +62 8953 37443659
          </Text>
          <View
            style={{
              width: "100%",
              backgroundColor: "#F9F8F8",
              paddingHorizontal: 10,
              paddingVertical: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Text>Gold Member</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>See Benefits</Text>
              <Ionicons name="chevron-forward" size={16} />
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default ProfileCard;
