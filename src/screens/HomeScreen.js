import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import tw from "twrnc";
import { NavOptions } from "../components/NavOptions.component";
import PlacesAutocomplete from "../components/placesAutoComplete.component";

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={[tw`mt-5 p-5 bg-white h-full`]}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <PlacesAutocomplete />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};
