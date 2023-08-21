import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import editProfileStyle from "../styles/editProfileStyle";
import axios from "axios";

export default function EditProfile({ route }) {
  const { userDetails } = route.params;

  const [username, setUserName] = useState(userDetails.userName);
  const [email, setEmail] = useState(userDetails.email);
  const [password, setPassword] = useState(userDetails.password);
  const [imageURL, setImageURL] = useState(userDetails.imageURL);

  const navigation = useNavigation();

  const handleOnSubmit = async () => {
    try {
      console.log("userDetails:", userDetails);

      const updatedUserDetails = {
        userId: userDetails.userId,
        userName: username,
        email: email,
        password: password,
        imageUrl: imageURL,
      };

      if (userDetails.registerUser) {
        updatedUserDetails.registerUserId =
          userDetails.registerUser.registerUserId;
        updatedUserDetails.registerUser = {
          registerUserId: userDetails.registerUser.registerUserId,
          userName: userDetails.registerUser.userName,
          password: userDetails.registerUser.password,
        };
      }

      await axios.put(
        `http://YOUR-IP:5130/api/User/${userDetails.userName}`,
        updatedUserDetails
      );
      console.log("Profile updated successfully");
      navigation.navigate("Profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <View style={editProfileStyle.container}>
      <View style={editProfileStyle.form}>
        <Text style={editProfileStyle.label}>UserName:</Text>
        <TextInput
          style={editProfileStyle.input}
          placeholder="Insira um username"
          value={username}
          onChangeText={setUserName}
        />
        <Text style={editProfileStyle.label}>Email:</Text>
        <TextInput
          style={editProfileStyle.input}
          placeholder="Insira um email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={editProfileStyle.label}>Password:</Text>
        <TextInput
          style={editProfileStyle.input}
          secureTextEntry={true}
          placeholder="Insira uma password"
          value={password}
          onChangeText={setPassword}
        />
        <Text style={editProfileStyle.label}>Image:</Text>
        <TextInput
          style={editProfileStyle.input}
          placeholder="Insert an image url"
          value={imageURL}
          onChangeText={setImageURL}
        />
        <TouchableOpacity
          style={editProfileStyle.button}
          onPress={handleOnSubmit}
        >
          <Text style={editProfileStyle.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
