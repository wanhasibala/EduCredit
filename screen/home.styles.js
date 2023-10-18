import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

 
const styles = StyleSheet.create({
    item: {
      backgroundColor: COLORS.secondary,
      padding: 8,
      marginRight: 20,
      marginVertical: 8,
      borderRadius: 10,
      shadowColor: '#000000',
      shadowOffset: {object: {width: 0.5, height: 0}},
      shadowOpacity: 0.25,
      marginBottom: 20,
    },
    itemPopular:{
      flexDirection: 'row',
      marginBottom: 20,
      gap: 10,
      padding: 8,
      borderWidth: 1,
      borderRadius: 10,

    },
    imageCard:{
        width: 200,
        height: 150,
        backgroundColor: COLORS.primary,
    },
    imageCardPopular:{
        width: 80,
        height: 80,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    profilePicture:{
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
    },
    mentor: {
      fontSize: 16,
    },
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
      backgroundColor: COLORS.primary,
      borderRadius: 56,
    },
    searchFilter: {
      flexDirection: "row",
      gap: 15,
      marginBottom: 20,
    },
    textInput: {
      flexDirection: "row",
      flex: 1,
      padding: 10,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: COLORS.secondary,
      gap: 5,
    },
    filterIcon: {
      width: 38,
      height: 38,
      backgroundColor: COLORS.white,
      borderRadius: 19,
      borderColor: COLORS.secondary,
      borderWidth: 1,
    },
    filter: (border, color) => ({
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderWidth: 1,
      borderRadius: 15,
      backgroundColor: color,
      borderColor: border,
      marginBottom: 20,
    }),
  })
  
  export default styles;