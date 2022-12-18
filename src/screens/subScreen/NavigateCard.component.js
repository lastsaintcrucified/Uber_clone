import React from "react";
import { Text, SafeAreaView, View } from "react-native";
import tw from "twrnc";
import { NavFavourites } from "../../components/NavFavourites.component";
import { NavigateCardBottom } from "../../components/NavigateCardBottom.component";
import PlacesAutocomplete from "../../components/PlacesAutoComplete.component";
const inputStyle = {
  backgroundColor: "#DDDDDF",
  padding: 3,
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
          isDestination={true}
          inputStyle={inputStyle}
        />
        <NavFavourites />
      </View>
      <NavigateCardBottom />
    </SafeAreaView>
  );
};
