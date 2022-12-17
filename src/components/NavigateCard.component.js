import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import tw from "twrnc";
import { NavFavourites } from "./NavFavourites.component";
import PlacesAutocomplete from "./PlacesAutoComplete.component";
const inputStyle = {
  backgroundColor: "#DDDDDF",
  padding: 5,
  marginTop: 10,
  marginHorizontal: 10,
};
export const NavigateCard = () => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-3 text-xl`}>Navigate Card!</Text>
      <View style={tw`border-t border-gray-200 flex-1`}>
        <PlacesAutocomplete
          placeholderText="Where to?"
          isOrigin={false}
          inputStyle={inputStyle}
          navToRider="RideOptionCard"
        />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};
