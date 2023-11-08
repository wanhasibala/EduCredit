import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "./ProductDetails.styles";
import ContentPreview from "../components/ContentPreview";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: 1,
    title: "anjay",
  },
  {
    id: 2,
    title: "anjay1",
  },
];

const ProductDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={styles.Header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.HeaderButton}>
                <Ionicons name="chevron-back" size={24} />
              </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 24, fontWeight: "600" }}>
              Detail Course
            </Text>
            <View style={styles.HeaderButton}>
              <Ionicons name="bookmark-outline" size={20} />
            </View>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
          >
            <View style={styles.videoContainer}>
              <View style={styles.videoPlayer}>
                <Text>anjay</Text>
              </View>
              <View style={styles.videoPlayer}>
                <Text>anjay</Text>
              </View>
              <View style={styles.videoPlayer}>
                <Text>anjay</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.contentHeader}>
            <View style={styles.HeaderTitle}>
              <Text style={{ fontSize: 24, fontWeight: "600" }}>
                Mentor name
              </Text>
              <View style={styles.mentorContainer}>
                <View style={styles.imageMentor}></View>
                <Text style={{ fontSize: 16 }}>anjay mentor</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "flex-end",
                backgroundColor: "#ffefcc",
                padding: 5,
                gap: 2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="star" color="#FFB200" size={20} />
              <Text style={{ fontSize: 18, fontWeight: "600" }}>4.6</Text>
            </View>
          </View>
          <View style={{ padding: 20, gap: 20 }}>
            <View style={{ gap: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                Description
              </Text>
              <Text style={{ fontSize: 14 }}>
                Course ini fokus pada desain antarmuka pengguna (UI) dan
                pengalaman pengguna (UX) yang modern dan efektif. Anda akan
                mempelajari prinsip-prinsip desain, teknik prototyping, dan
                pengujian UX
              </Text>
            </View>
            <View>
              <FlatList
                data={DATA}
                renderItem={({ item }) => <ContentPreview title={item.title} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ gap: 10 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          width: "100%",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            padding: 15,
            backgroundColor: "#277BC0",
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Enroll Now</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
