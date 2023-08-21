import React, { useState } from "react";
import {
  View,
  Switch,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import style from "../styles/style";
import taskStyle from "../styles/taskStyle";
import CalendarPicker from "react-native-calendar-picker";
import moment from "moment";
import "moment/locale/pt-br";
import { AntDesign } from "@expo/vector-icons";

moment.locale("pt-br");

export default function Tasks() {
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [iscompleted, setIsCompleted] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);

  const handleAddTask = () => {
    const formData = {
      description: description,
      createdAt: createdAt,
      iscompleted: iscompleted,
    };

    axios
      .post("http://YOUR-IP:5130/api/Task", formData)
      .then(() => {
        Alert.alert("Task added!", "Tarefa added with success!");
      })
      .catch(() => {
        Alert.alert("Task not added!", "Task not added. Try again!");
      });
  };

  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  return (
    <View style={style.container}>
      <Text style={taskStyle.textTitle}>Add Task</Text>
      <View style={taskStyle.taskContainer}>
        <TextInput
          placeholder="Descrição"
          onChangeText={setDescription}
          value={description}
          style={taskStyle.taskInput}
        />
      </View>
      <View style={taskStyle.calendarContainer}>
        <TouchableOpacity onPress={toggleCalendar}>
          <View style={taskStyle.calendarInput}>
            <AntDesign name="calendar" size={24} color="black" />
            <Text>
              {createdAt ? moment(createdAt).format("LL") : "Selecionar data"}
            </Text>
          </View>
        </TouchableOpacity>
        {calendarVisible && (
          <CalendarPicker
            selectedStartDate={createdAt}
            onDateChange={(date) => {
              setCreatedAt(date);
              toggleCalendar();
            }}
          />
        )}
      </View>
      <View style={taskStyle.switchContainer}>
        <Text>State:</Text>
        <Switch
          value={iscompleted}
          onValueChange={(value) => setIsCompleted(value)}
        />
        <Text style={taskStyle.switchText}>
          {iscompleted ? "Active" : "Inactive"}
        </Text>
      </View>
      <TouchableOpacity style={taskStyle.button} onPress={handleAddTask}>
        <Text style={taskStyle.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
}
