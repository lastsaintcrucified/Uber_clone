import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";
import React from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import tw from "twrnc";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

export const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`m-2 p-2 pt-4 pl-6 pb-8 h-65 w-40 bg-gray-100`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg text-left font-semibold`}>
              {item.title}
            </Text>
            <Icon
              style={tw`p-2 mt-4 w-10 bg-black rounded-full`}
              type="antdesign"
              color="white"
              name="arrowright"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
