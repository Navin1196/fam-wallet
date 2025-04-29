import React, { useEffect, useState } from "react";
import { View, Text, Button, Alert } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { getCurrentLocation } from "../utils/maps";

const GoogleMapsScreen: React.FC = () => {
  const [region, setRegion] = useState<Region | null>(null);

  useEffect(() => {
    fetchLocation();
  }, []);

  const fetchLocation = async () => {
    const location = await getCurrentLocation();
    if (location) {
      setRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: "center", marginVertical: 10 }}>
        Google Maps
      </Text>

      {region ? (
        <MapView
          style={{ flex: 1 }}
          initialRegion={region}
          showsUserLocation
          onRegionChangeComplete={(reg) => setRegion(reg)}
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title="You are here"
          />
        </MapView>
      ) : (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Loading Map...
        </Text>
      )}

      <Button title="Refresh Location" onPress={fetchLocation} />
    </View>
  );
};

export default GoogleMapsScreen;
