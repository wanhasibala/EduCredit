import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  Header: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderButton: {
    paddingHorizontal: 6,
    paddingVertical: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  videoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginTop: 20,
  },
  videoPlayer: {
    width: 250,
    height: 170,
    backgroundColor: "#bada55",
  },
  contentHeader: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",

    marginTop: 20,
    paddingHorizontal: 20,
    gap: 5,
  },
  HeaderTitle: {},
  mentorContainer: {
    flexDirection: "row",
    gap: 5,
  },
  imageMentor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "blue",
  },
});

export default styles;
