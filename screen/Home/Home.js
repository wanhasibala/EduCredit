import {
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./home.styles";
import { COLORS } from "../../constants/theme";
import ProductCardView from "../../components/ProductCardView";
import ItemPopular from "../../components/ItemPopular";
import { DATA } from "../../data/courseData";
import { useNavigation } from "@react-navigation/native";
import ProfilePicture from "../../components/ProfilePicture";
// import Profile from "./Profile";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ paddingTop: 20 }}>
      <View style={styles.bodyContainer}>
        <ScrollView
        // showsVerticalScrollIndicator="false"
        >
          <View style={styles.Header}>
            <View>
              <Text style={styles.HeaderText(12, "regular")}>Welcome</Text>
              <Text style={styles.HeaderText(28, "bold")}>Wan Hasib</Text>
            </View>
            <ProfilePicture />
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
          <Image
            source={require("../../assets/Banner.png")}
            style={{ marginBottom: 20, width: "auto", resizeMode: "contain" }}
          />
          <View style={{ flexDirection: "row", gap: 5 }}>
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

          <ScrollView>
            <View>
              <FlatList
                data={DATA}
                renderItem={({ item }) => (
                  <ProductCardView
                    title={item.title}
                    mentor={item.mentor}
                    duration={item.duration}
                    image={item.image}
                    mentorImage={item.mentorImage}
                  />
                )}
                keyExtractor={(item) => item.id}
                horizontal
                // showsHorizontalScrollIndicator="false"
                snapToAlignment="start"
              />
            </View>
          </ScrollView>
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
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <ItemPopular
                title={item.title}
                mentor={item.mentor}
                duration={item.duration}
                image={item.image}
                mentorImage={item.mentorImage}
              />
            )}
            keyExtractor={(item) => item.id}
            // scrollEnabled="false"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
