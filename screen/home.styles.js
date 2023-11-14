import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

 
const styles = StyleSheet.create({
    bodyContainer: {
      padding: 20,
      backgroundColor: '#f9f9f9',
      overflow: 'visible'
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
      borderRadius: 56,
      paddingTop: 20,
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
      width: 40,
      height: 40,
      backgroundColor: COLORS.white,
      borderRadius: 19,
      borderColor: COLORS.secondary,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 5
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