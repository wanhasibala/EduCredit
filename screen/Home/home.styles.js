import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/theme";

 
const styles = StyleSheet.create({
    bodyContainer: {
      padding: 20,
      backgroundColor: '#f9f9f9',
    },
    Header: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: 20,
    },
    HeaderText: (size, weight) => ({
      fontSize: size,
      fontWeight: weight,
    }),
    
    searchFilter: {
      flexDirection: "row",
      gap: 15,
      marginBottom: 20,
      justifyContent: "center",
      alignItems: "center"
    },
    textInput: {
      flexDirection: "row",
      flex: 1,
      paddingHorizontal: 10,
      paddingVertical : 5,
      borderRadius: 30,
      borderWidth: 1,
      borderColor: COLORS.secondary,
      gap: 5,
      alignItems: "center"
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