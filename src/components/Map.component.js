import React, { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectOrigin, selectDestination } from "../../redux/slices/navSlice";

export const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  useEffect(() => {
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 100, left: 50 },
    });
  }, [origin, destination]);
  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.lat,
        longitude: origin.lon,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin?.lat && (
        <Marker
          coordinate={{
            latitude: origin.lat,
            longitude: origin.lon,
          }}
          title="Origin"
          description={origin.title}
          identifier="origin"
        />
      )}
      {destination?.lat && (
        <Marker
          coordinate={{
            latitude: destination.lat,
            longitude: destination.lon,
          }}
          title="Destination"
          description={destination.title}
          identifier="destination"
        />
      )}
    </MapView>
  );
};
