import React from "react";
import { Text, SafeAreaView, View, StatusBar } from "react-native";
import tw from "twrnc";
import { Map } from "../components/Map.component";

export const MapScreen = () => {
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}></View>
    </View>
  );
};
