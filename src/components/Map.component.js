import React, { useEffect, useRef } from "react";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectOrigin, selectDestination } from "../../redux/slices/navSlice";

export const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  console.log("1", destination);
  const mapRef = useRef(null);
  useEffect(() => {
    if (!destination) return;

    setTimeout(() => {
      mapRef?.current?.fitToSuppliedMarkers(["destination", "origin"], {
        edgePadding: { top: 70, right: 70, bottom: 70, left: 70 },
      });
    }, 500);

    // console.log("2", destination);
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.lat,
        longitude: origin.lon,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,
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
          identifier={"origin"}
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
          identifier={"destination"}
        />
      )}
    </MapView>
  );
};
