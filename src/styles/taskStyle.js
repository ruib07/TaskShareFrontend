import { StyleSheet } from "react-native";

export default StyleSheet.create({
  textTitle: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 30,
    fontWeight: "bold",
  },
  taskContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  calendarContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  calendarInput: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "50%",
    justifyContent: "space-between",
  },
  taskInput: {
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    width: "60%",
    borderRadius: 5,
    padding: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    justifyContent: "space-between",
  },
  switchText: {
    marginLeft: 10,
  },
  button: {
    width: "60%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#1e90ff",
  },
  buttonText: {
    color: "#fff",
  },
});
