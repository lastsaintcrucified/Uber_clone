import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { selectDestination } from "../../redux/slices/navSlice";
import { useSelector } from "react-redux";

export const NavigateCardBottom = () => {
  const navigation = useNavigation();
  const destination = useSelector(selectDestination);

  return (
    <View
      style={tw`flex-row justify-evenly bg-white mt-auto py-3 border-t border-gray-100`}
    >
      <TouchableOpacity
        style={tw`flex flex-row ${
          !destination ? "bg-gray-300" : "bg-black"
        } justify-evenly w-24 px-4 py-3 rounded-full`}
        onPress={() => navigation.navigate("RideOptionCard")}
        disabled={!destination}
      >
        <Icon name="car" type="font-awesome" color="white" size={16} />
        <Text style={tw`text-white text-center`}>Rides</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex flex-row justify-evenly w-24 px-4 py-3 rounded-full`}
      >
        <Icon name="fast-food-outline" type="ionicon" color="black" size={18} />
        <Text style={tw`text-black text-center`}>Eats</Text>
      </TouchableOpacity>
    </View>
  );
};
