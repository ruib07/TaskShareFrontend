import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import homeStyle from "../styles/homeStyle";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios
      .get("http://YOUR-IP:5130/api/Task")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error finding tasks:", error);
      });
  };

  return (
    <View>
      <Text style={homeStyle.text}>Tasks List</Text>
      <View style={homeStyle.homeContainer}>
        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={homeStyle.tasksContainer}>
              <Text>Description: {item.description}</Text>
              <Text>Creation Date: {item.createdAt}</Text>
              <Text>Status: {item.isCompleted ? "Active" : "Inactive"}</Text>
              <Text>------------------------------------</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
