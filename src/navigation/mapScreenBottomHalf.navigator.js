import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";
import { NavigateCard } from "../components/NavigateCard.component";
import { RideOptionCard } from "../components/RideOption.component";

const Stack = createNativeStackNavigator();

export const MapScreenBottomHalf = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right", //<-- this is what will do the trick
        presentation: "card",
      }}
    >
      <Stack.Screen
        name="NavigateCard"
        component={NavigateCard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RideOptionCard"
        component={RideOptionCard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
