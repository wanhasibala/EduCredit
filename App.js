import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/bottomTabNavigator";
import { ProductDetails } from './screen/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen 
        name="ProductDetails"
        component={ProductDetails}
        options={{headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
