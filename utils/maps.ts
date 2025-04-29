import * as Location from "expo-location";
import { Alert } from "react-native";

/**
 * Function to request location permissions.
 * @returns {Promise<boolean>} - Returns true if permission is granted, otherwise false.
 */
const requestLocationPermissions = async (): Promise<boolean> => {
  const { status } = await Location.requestForegroundPermissionsAsync();
  return status === "granted";
};

/**
 * Function to get the user's current location.
 * @returns {Promise<{ latitude: number; longitude: number } | null>}
 */
export const getCurrentLocation = async (): Promise<{
  latitude: number;
  longitude: number;
} | null> => {
  const hasPermission = await requestLocationPermissions();
  if (!hasPermission) {
    Alert.alert("Permission Denied", "Please enable location services.");
    return null;
  }

  const location = await Location.getCurrentPositionAsync({});
  return {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
};
