import { StyleSheet } from "react-native";

export default StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  homeContainer: {
    flexDirection: "row",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.26,
    elevation: 4,
    backgroundColor: "#fff",
    padding: 16,
    marginBottom: 16,
  },
  tasksContainer: {
    flexDirection: "column",
    marginLeft: 16,
  },
});
