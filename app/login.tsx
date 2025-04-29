import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "expo-router";
import { authenticateWithBiometrics } from "@/utils/biometrics";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser({
        uid: userCredential.user.uid,
        email: userCredential.user.email!,
      });
      router.replace("/(tabs)");
    } catch (error: any) {
      Alert.alert("Login Failed", "Error occurred during login.");
    }
  };

  const handleBiometricAuth = async () => {
    const success = await authenticateWithBiometrics();
    if (success) {
      setIsAuthenticated(true);
      setUser({ uid: "biometric_user", email: "biometric@example.com" });
      router.replace("/(tabs)");
      // Alert.alert("Success", "Biometric authentication successful!");
    } else {
      Alert.alert("Error", "Biometric authentication failed.");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderBottomWidth: 1, width: "80%", marginBottom: 10 }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderBottomWidth: 1, width: "80%", marginBottom: 20 }}
      />
      <TouchableOpacity
        onPress={handleLogin}
        style={{ backgroundColor: "blue", padding: 10, borderRadius: 5 }}
      >
        <Text className="text-white">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/signup")}>
        <Text style={{ marginTop: 10, color: "blue" }}>
          Don't have an account? Sign up
        </Text>
      </TouchableOpacity>
      <View style={{ marginTop: 20 }}>
        <Button title="Login with Biometrics" onPress={handleBiometricAuth} />
      </View>
    </View>
  );
};

export default LoginScreen;
