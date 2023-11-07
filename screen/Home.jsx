import {
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./home.styles";
import { COLORS } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCardView from "../components/ProductCardView";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
const ItemPopular = ({ title }) => (
  <View style={styles.itemPopular}>
    <View style={styles.imageCardPopular}></View>
    <View style={StyleSheet.create({ gap: 5 })}>
      <Text style={styles.title}>{title}</Text>
      <View style={StyleSheet.create({ flexDirection: "row", gap: 4 })}>
        <View style={styles.profilePicture}></View>
        <Text style={styles.mentor}>mentor name</Text>
      </View>
      <Text style={styles.mentor}>anjay timeline</Text>
    </View>
  </View>
);
const Home = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.bodyContainer}>
        <View style={styles.Header}>
          <View>
            <Text style={styles.HeaderText(12, "regular")}>Welcome</Text>
            <Text style={styles.HeaderText(28, "bold")}>Wan Hasib</Text>
          </View>
          <View style={styles.HeaderProfile}></View>
        </View>
        <View style={styles.searchFilter}>
          <View style={styles.textInput}>
            <Ionicons name="search" size={20} color={"#404040"} />
            <TextInput placeholder="Pencarian" />
          </View>
          <View style={styles.filterIcon}>
            <MaterialIcons name="filter-alt" size={22} />
          </View>
        </View>
        <View style={StyleSheet.create({ flexDirection: "row", gap: 5 })}>
          <View style={styles.filter(COLORS.primary, COLORS.primary)}>
            <Text>All Course</Text>
          </View>
          <View style={styles.filter(COLORS.secondary, "white")}>
            <Text>Design</Text>
          </View>
          <View style={styles.filter(COLORS.secondary, "white")}>
            <Text>Coding</Text>
          </View>
          <View style={styles.filter(COLORS.secondary, "white")}>
            <Text>Business</Text>
          </View>
          <View style={styles.filter(COLORS.secondary, "white")}>
            <Text>3D Modelling</Text>
          </View>
        </View>
        <View>
        <ProductCardView  title={ 'anjay'}/>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={styles.title}> Popular</Text>
          <Text> Lihat semua</Text>
        </View>

        {/* <FlatList
          data={DATA}
          renderItem={({ item }) => <ItemPopular title={item.title} />}
          keyExtractor={(item) => item.id}
          scrollEnabled="false"
        /> */}
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;
