import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './screens/Intro';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer independent={true}>  
      <Stack.Navigator>
          <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


