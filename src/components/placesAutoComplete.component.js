import React, { memo, useCallback, useRef, useState } from "react";
import { Text, View, Dimensions } from "react-native";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../../redux/slices/navSlice";

const PlacesAutocomplete = ({
  placeholderText,
  isOrigin,
  isDestination,
  inputStyle,
}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [suggestionsList, setSuggestionsList] = useState(null);
  const dropdownController = useRef(null);
  const searchRef = useRef(null);

  const getSuggestions = useCallback(async (q) => {
    const filterToken = q.toLowerCase();
    console.log("getSuggestions", q);
    if (typeof q !== "string" || q.length < 3) {
      setSuggestionsList(null);
      return;
    }
    setLoading(true);

    const response = await fetch(
      `https://us1.locationiq.com/v1/search?key=pk.664a012aa8784b4300a135a850fb1efa&q=${q}&format=json`
    );
    const items = await response.json();
    // console.log(items);
    const suggestions = items
      .filter((item) => item.display_name.toLowerCase().includes(filterToken))
      .map((item) => ({
        id: item.place_id,
        title: item.display_name,
        lon: Number(item.lon),
        lat: Number(item.lat),
      }));
    // console.log(suggestions);
    setSuggestionsList(suggestions);
    setLoading(false);
  }, []);

  const onClearPress = useCallback(() => {
    setSuggestionsList(null);
  }, []);

  const onOpenSuggestionsList = useCallback((isOpened) => {}, []);
  return (
    <View>
      <AutocompleteDropdown
        ref={searchRef}
        // initialValue={'1'}
        direction="down"
        dataSet={suggestionsList}
        onChangeText={getSuggestions}
        onSelectItem={(item) => {
          item && isOrigin && !isDestination && dispatch(setOrigin(item));
          item && !isOrigin && isDestination && dispatch(setDestination(item));
        }}
        debounce={600}
        suggestionsListMaxHeight={
          isOrigin
            ? Dimensions.get("window").height * 0.4
            : Dimensions.get("window").height * 0.3
        }
        onClear={onClearPress}
        //  onSubmit={(e) => onSubmitSearch(e.nativeEvent.text)}
        onOpenSuggestionsList={onOpenSuggestionsList}
        loading={loading}
        useFilter={false}
        clearOnFocus={false}
        closeOnBlur={false}
        closeOnSubmit={false}
        inputContainerStyle={
          inputStyle
            ? inputStyle
            : {
                backgroundColor: "transparent",
              }
        }
        textInputProps={{
          placeholder: placeholderText,
        }}
        suggestionsListContainerStyle={{
          backgroundColor: "white",
          zIndex: 300,
          borderWidth: 0,
        }}
      />
    </View>
  );
};

export default memo(PlacesAutocomplete);
