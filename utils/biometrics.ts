import * as LocalAuthentication from "expo-local-authentication";

/**
 * Function to authenticate user using biometrics.
 * @returns {Promise<boolean>}
 */
export const authenticateWithBiometrics = async (): Promise<boolean> => {
  try {
    // Check if biometric authentication is available
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    if (!hasHardware) {
      console.log("Biometric authentication is not supported on this device.");
      return false;
    }

    // Check if biometrics are enrolled
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();
    if (!isEnrolled) {
      console.log("No biometric authentication is enrolled.");
      return false;
    }

    // Authenticate using biometrics
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate with Biometrics",
      fallbackLabel: "Use Passcode",
      disableDeviceFallback: false,
    });

    return result.success;
  } catch (error) {
    console.error("Biometric authentication error:", error);
    return false;
  }
};
