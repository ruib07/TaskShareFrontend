import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import profileStyle from "../styles/profileStyle";
import axios from "axios";

export default function Profile() {
  const { selectedUserName } = useAuth();
  const [userDetails, setUserDetails] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://YOUR-IP:5130/api/User/${selectedUserName}`
        );
        console.log("Data fetched:", response.data);
        setUserDetails(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedUserName]);

  const handleEditProfile = () => {
    navigation.navigate("EditProfile", {
      userDetails: userDetails,
    });
  };

  if (!userDetails) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      {userDetails.map((user, index) => (
        <View style={profileStyle.container} key={index}>
          <View style={profileStyle.avatarContainer}>
            <Image
              source={{ uri: user.imageUrl }}
              style={profileStyle.avatar}
            />
            <Text style={profileStyle.name}>{user.userName}</Text>
          </View>
          <View style={profileStyle.infoContainer}>
            <Text style={profileStyle.infoLabel}>Email:</Text>
            <Text style={profileStyle.infoValue}>{user.email}</Text>
          </View>
          <TouchableOpacity
            style={profileStyle.button}
            onPress={handleEditProfile}
          >
            <Text style={profileStyle.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
