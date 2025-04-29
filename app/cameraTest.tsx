import React, { useState } from "react";
import { View, Text, Button, Image, Alert } from "react-native";
import { Video } from "expo-av";
import { capturePhoto, recordVideo } from "../utils/camera";

const CameraScreen: React.FC = () => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [videoUri, setVideoUri] = useState<string | null>(null);

  const handleCapturePhoto = async () => {
    const uri = await capturePhoto();
    if (uri) {
      setPhotoUri(uri);
      Alert.alert("Success", "Photo captured successfully!");
    } else {
      Alert.alert("Error", "Failed to capture photo.");
    }
  };

  const handleRecordVideo = async () => {
    const uri = await recordVideo();
    if (uri) {
      setVideoUri(uri);
      Alert.alert("Success", "Video recorded successfully!");
    } else {
      Alert.alert("Error", "Failed to record video.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Camera</Text>

      <Button title="Capture Photo" onPress={handleCapturePhoto} />
      {photoUri && (
        <Image
          source={{ uri: photoUri }}
          style={{ width: 200, height: 200, marginTop: 10 }}
        />
      )}

      <Button title="Record Video" onPress={handleRecordVideo} />
      {videoUri && (
        <Video
          source={{ uri: videoUri }}
          style={{ width: 300, height: 300, marginTop: 10 }}
          useNativeControls
        />
      )}
    </View>
  );
};

export default CameraScreen;
