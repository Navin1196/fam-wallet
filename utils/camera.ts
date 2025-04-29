import * as ImagePicker from "expo-image-picker";

/**
 * Function to request camera permissions.
 * @returns {Promise<boolean>}
 */
const requestCameraPermissions = async (): Promise<boolean> => {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  return status === "granted";
};

/**
 * Function to capture a photo using the camera.
 * @returns {Promise<string | null>} - Returns the photo URI if successful, otherwise null.
 */
export const capturePhoto = async (): Promise<string | null> => {
  const hasPermission = await requestCameraPermissions();
  if (!hasPermission) {
    console.log("Camera permission not granted.");
    return null;
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: "images",
    quality: 1,
    base64: false,
  });

  return result.canceled ? null : result.assets[0].uri;
};

/**
 * Function to record a video using the camera.
 * @returns {Promise<string | null>} - Returns the video URI if successful, otherwise null.
 */
export const recordVideo = async (): Promise<string | null> => {
  const hasPermission = await requestCameraPermissions();
  if (!hasPermission) {
    console.log("Camera permission not granted.");
    return null;
  }

  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: "videos",
    quality: 1,
  });

  return result.canceled ? null : result.assets[0].uri;
};
