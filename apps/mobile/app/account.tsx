import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export default function Account() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Here, you could integrate API calls to save the changes
    Alert.alert("Success", "Your account has been updated!");
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Discard any unsaved changes
    Alert.alert("Canceled", "No changes were made.");
    setIsEditing(false);
  };

  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Edit Account</Text>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          editable={isEditing}
          style={{
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginVertical: 10,
          }}
        />
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          editable={isEditing}
          style={{
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginVertical: 10,
          }}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={{ width: "100%", marginBottom: 20 }}>
        <Text>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          editable={isEditing}
          style={{
            borderColor: "gray",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginVertical: 10,
          }}
          secureTextEntry
          placeholder="Enter new password"
        />
      </View>

      {!isEditing ? (
        <Button title="Edit" onPress={() => setIsEditing(true)} />
      ) : (
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={handleCancel} />
        </View>
      )}
    </View>
  );
}
