import { Text, View, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./myCourse.styles";
import { Ionicons } from "@expo/vector-icons";
import { DATA } from "../../data/courseData";
import CoursePaid from "../../components/coursePaid";

const MyCourse = () => {
  return (
    <ScrollView>
      <SafeAreaView style={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20
          }}
        >
          <View
            style={{
              padding: 5,
              paddingHorizontal: 7,
              borderRadius: 20,
              borderWidth: 0.5,
              borderColor: "#e5e5e5",
            }}
          >
            {/* <Ionicons name="chevron-back" size={24} /> */}
          </View>
          <View style={{ alignItems: "center", gap: 5 }}>
            <Text style={styles.HeaderText}> My Course</Text>
            <Text style={{ fontSize: 12, color: "#2066A0" }}> 5 Course</Text>
          </View>
          <View
            style={{
              padding: 5,
              paddingHorizontal: 7,
              borderRadius: 20,
              borderWidth: 0.5,
              borderColor: "#e5e5e5",
            }}
          >
            {/* <Ionicons name="search" size={24} /> */}
          </View>
        </View>
        <View>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <CoursePaid
                title={item.title}
                progress={item.progress}
                image={item.image}
                width={item.progress}
                mentor={item.mentor}
                mentorImage={item.mentorImage}
              />
            )}
            keyExtractor={(item) => item.id}
            // scrollEnabled="false"
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default MyCourse;
