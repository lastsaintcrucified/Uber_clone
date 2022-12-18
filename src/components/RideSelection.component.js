import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { selectTravelTimeInformation } from "../../redux/slices/navSlice";
import { useSelector } from "react-redux";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-XL-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

export const RideSelection = () => {
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const RATE = 56.78;

  return (
    <>
      <FlatList
        style={tw`mt--5`}
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-2 ${
              item.id === selected?.id && "bg-gray-200"
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{
                width: 80,
                height: 80,
                resizeMode: "contain",
              }}
              source={{
                uri: item.image,
              }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-lg font-semibold`}>{item.title}</Text>
              <Text>
                {(travelTimeInformation?.duration / 60).toFixed(2)} minutes of
                Travel time...
              </Text>
            </View>
            <Text style={tw`text-lg font-semibold`}>
              &#2547;
              {(
                (travelTimeInformation?.distance / 1000) *
                RATE *
                item.multiplier
              ).toFixed(2)}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-200"}`}
        >
          <Text style={tw`text-center text-white text-lg`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
