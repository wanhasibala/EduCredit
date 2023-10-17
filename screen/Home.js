import { View, Text, TextInput } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const Home = () => {
  return (
    <>
      <View style={styles.bodyContainer}>
        <View style={styles.Header}>
          <View>
            <Text style={styles.HeaderText(12, "regular")}>Welcome</Text>
            <Text style={styles.HeaderText(28, "bold")}>Wan Hasib</Text>
          </View>
          <View style={styles.HeaderProfile}></View>
        </View>
        <View style={styles.searchFilter}>
          <View style={styles.textInput}>
            <TextInput placeholder="Pencarian" />
          </View>
          <View style={styles.filterIcon}></View>
        </View>
        <View style={StyleSheet.create({ flexDirection: "row", gap: 5, })}>
          <View style={styles.filter("yellow",'yellow')}>
            <Text>All Course</Text>
          </View>
          <View style={styles.filter('black', 'white')}>
            <Text>Design</Text>
          </View>
          <View style={styles.filter("black",'white')}>
            <Text>Coding</Text>
          </View>
          <View style={styles.filter("black", 'white')}>
            <Text>Business</Text>
          </View>
          <View style={styles.filter("black", 'white')}>
            <Text>3D Modelling</Text>
        </View>
          </View>
      </View>
    </>
  );
};

export default Home;
const styles = StyleSheet.create({
  bodyContainer: {
    padding: 20,
  },
  Header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  HeaderText: (size, weight) => ({
    fontSize: size,
    fontWeight: weight,
  }),
  HeaderProfile: {
    width: 56,
    height: 56,
    backgroundColor: "blue",
    borderRadius: 56,
  },
  searchFilter: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "blue",
  },
  filterIcon: {
    width: 34,
    height: 34,
    backgroundColor: "blue",
    borderRadius: 17,
  },
  filter: (border,color) => ({
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: color,
    borderColor: border,
  }),
});
