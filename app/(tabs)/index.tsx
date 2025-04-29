import { useAuthStore } from "@/store/authStore";
import { Link, useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Home = () => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const navigation = useRouter();
  const handleLogout = () => {
    logout();
    navigation.replace("/login");
  };
  return (
    <View className="m-10 gap-2">
      <Text className="text-blue-700">Home</Text>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        Welcome, {user?.email}
      </Text>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "red",
          padding: 10,
          borderRadius: 5,
          marginTop: 20,
          width: 120,
        }}
      >
        <Text className="text-white">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";

// // Mock user role and data (replace with actual auth and API data)
// const user = { role: "user", name: "John Doe" };
// const mockData = {
//   walletBalance: 1250.75,
//   activeReminders: 3,
//   goalProgress: 65,
//   transactions: [
//     {
//       id: "1",
//       description: "Grocery Store",
//       amount: -45.99,
//       date: "2025-04-27",
//     },
//     {
//       id: "2",
//       description: "Salary Deposit",
//       amount: 2000,
//       date: "2025-04-25",
//     },
//   ],
//   uploads: [
//     { id: "1", fileName: "receipt.pdf", date: "2025-04-26" },
//     { id: "2", fileName: "invoice.png", date: "2025-04-24" },
//   ],
// };

// const DashboardScreen = () => {
//   const [userRole, setUserRole] = useState(user.role);
//   const [dashboardData, setDashboardData] = useState(mockData);

//   // Simulate fetching data based on role (replace with actual API call)
//   useEffect(() => {
//     // Example: Admin might see different data or metrics
//     if (userRole === "admin") {
//       setDashboardData({
//         ...mockData,
//         walletBalance: 5000, // Example admin-specific data
//       });
//     }
//   }, [userRole]);

//   // Overview Card Component
//   const OverviewCard = ({ title, value, unit = "" }: any) => (
//     <View className="bg-white rounded-lg shadow-md p-4 flex-1 mx-2">
//       <Text className="text-gray-600 text-sm">{title}</Text>
//       <Text className="text-2xl font-bold text-blue-600">
//         {unit}
//         {value}
//       </Text>
//     </View>
//   );

//   // Transaction Item Component
//   const TransactionItem = ({ item }: any) => (
//     <View className="flex-row justify-between py-2 border-b border-gray-200">
//       <View>
//         <Text className="text-gray-800">{item.description}</Text>
//         <Text className="text-gray-500 text-sm">{item.date}</Text>
//       </View>
//       <Text
//         className={`text-lg ${
//           item.amount < 0 ? "text-red-500" : "text-green-500"
//         }`}
//       >
//         {item.amount < 0 ? "" : "+"}${Math.abs(item.amount).toFixed(2)}
//       </Text>
//     </View>
//   );

//   // Upload Item Component
//   const UploadItem = ({ item }: any) => (
//     <View className="flex-row justify-between py-2 border-b border-gray-200">
//       <View>
//         <Text className="text-gray-800">{item.fileName}</Text>
//         <Text className="text-gray-500 text-sm">{item.date}</Text>
//       </View>
//       <TouchableOpacity className="bg-blue-500 px-3 py-1 rounded">
//         <Text className="text-white text-sm">View</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <ScrollView className="flex-1 bg-gray-100">
//       {/* Welcome Section */}
//       <View className="p-4 bg-blue-500">
//         <Text className="text-white text-2xl font-bold">
//           Welcome, {user.name}!
//         </Text>
//         <Text className="text-white text-lg">
//           {userRole === "admin" ? "Admin Dashboard" : "Your Dashboard"}
//         </Text>
//       </View>

//       {/* Overview Cards */}
//       <View className="flex-row px-4 py-4">
//         <OverviewCard
//           title="Wallet Balance"
//           value={dashboardData.walletBalance.toFixed(2)}
//           unit="$"
//         />
//         <OverviewCard
//           title="Active Reminders"
//           value={dashboardData.activeReminders}
//         />
//         <OverviewCard
//           title="Goal Progress"
//           value={dashboardData.goalProgress}
//           unit="%"
//         />
//       </View>

//       {/* Recent Transactions */}
//       <View className="p-4">
//         <Text className="text-lg font-bold text-gray-800 mb-2">
//           Recent Transactions
//         </Text>
//         <FlatList
//           data={dashboardData.transactions}
//           renderItem={TransactionItem}
//           keyExtractor={(item) => item.id}
//           scrollEnabled={false}
//         />
//       </View>

//       {/* Recent Uploads */}
//       <View className="p-4">
//         <Text className="text-lg font-bold text-gray-800 mb-2">
//           Recent Uploads
//         </Text>
//         <FlatList
//           data={dashboardData.uploads}
//           renderItem={UploadItem}
//           keyExtractor={(item) => item.id}
//           scrollEnabled={false}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// export default DashboardScreen;
