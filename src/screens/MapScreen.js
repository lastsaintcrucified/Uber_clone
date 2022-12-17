import React from "react";
import { Text, SafeAreaView, View, StatusBar } from "react-native";
import tw from "twrnc";
import { Map } from "../components/Map.component";
import { MapScreenBottomHalf } from "../navigation/mapScreenBottomHalf.navigator";

export const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <MapScreenBottomHalf />
      </View>
    </View>
  );
};
