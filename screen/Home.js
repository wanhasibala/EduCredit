import {
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import styles from "./home.styles";
import { COLORS } from "../constants/theme";
import ProductCardView from "../components/ProductCardView";
import ItemPopular from "../components/ItemPopular";
import { DATA } from "../data/courseData";
``;

const Home = () => {
  return (
    <View style={styles.bodyContainer}>
      <SafeAreaView>
        <ScrollView>
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
            />
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
            scrollEnabled="false"
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
