import { Icon } from "@rneui/base";
import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "twrnc";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code street,London,UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London eye,London,UK",
  },
];

export const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`text-base font-semibold`}>{item.location}</Text>
            <Text style={tw`text-sm text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
