import React from "react";
import { Text, SafeAreaView, View, StatusBar } from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { selectDestination } from "../../redux/slices/navSlice";

export const RideOptionCard = () => {
  const destination = useSelector(selectDestination);
  console.log(destination);

  return (
    <View>
      <Text>RideOption Card!</Text>
    </View>
  );
};
