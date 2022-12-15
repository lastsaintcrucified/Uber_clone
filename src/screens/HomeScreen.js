import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import tw from "twrnc";
import { NavOptions } from "../components/NavOptions.component";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

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
        <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          dataSet={[
            { id: "1", title: "Alpha" },
            { id: "2", title: "Beta" },
            { id: "3", title: "Gamma" },
          ]}
          inputContainerStyle={{
            backgroundColor: "transparent",
          }}
          textInputProps={{
            placeholder: "Where from?",
          }}
          suggestionsListContainerStyle={{
            backgroundColor: "white",
            zIndex: 300,
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};
