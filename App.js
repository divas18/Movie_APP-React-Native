import { StatusBar } from "expo-status-bar";
import TabNavigator from "./src/navigators/TabNavigator";
import SeatBookingScreen from "./src/screens/SeatBookingScreen";
import MovieDetailsScreen from "./src/screens/MovieDetailsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }}>
        <stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: "default" }}
        />
        <stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{ animation: "slide_from_right" }}
        />
        <stack.Screen
          name="SeatBooking"
          component={SeatBookingScreen}
          options={{ animation: "slide_from_bottom" }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}
