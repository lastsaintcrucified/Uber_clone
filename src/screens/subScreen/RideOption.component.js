import React, { useEffect } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tw from "twrnc";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import {
  selectDestination,
  selectOrigin,
  selectTravelTimeInformation,
  setTravelTimeInformation,
} from "../../../redux/slices/navSlice";
import { RideSelection } from "../../components/RideSelection.component";

export const RideOptionCard = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const dispatch = useDispatch();
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  // console.log(destination);
  useEffect(() => {
    if (!origin || !destination) {
      return;
    }
    // console.log("or", origin);
    // console.log("des", destination);

    const getTravelTime = async () => {
      fetch(
        `https://us1.locationiq.com/v1/matrix/driving/${origin.lon},${origin.lat};${destination.lon},${destination.lat}?annotations=distance,duration&key=pk.664a012aa8784b4300a135a850fb1efa`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch(
            setTravelTimeInformation({
              distance: data.distances[0][1],
              duration: data.durations[0][1],
            })
          );
        });
    };
    getTravelTime();
  }, [origin, destination]);
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-3 p-3 z-50`}
          onPress={() => navigation.navigate("NavigateCard")}
        >
          <Icon
            name="chevron-left"
            type="fontawesome"
            color="black"
            size={18}
          />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a ride- {(travelTimeInformation?.distance / 1000).toFixed(2)}{" "}
          km
        </Text>
      </View>
      <RideSelection />
    </SafeAreaView>
  );
};
