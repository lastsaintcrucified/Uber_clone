import React from "react";
import { Text, SafeAreaView, View, StatusBar } from "react-native";
import tw from "twrnc";

export const MapScreen = () => {
  return (
    <SafeAreaView>
      <View style={tw`android:pt-15 bg-red-100`}>
        <Text>map Screen</Text>
      </View>
    </SafeAreaView>
  );
};
