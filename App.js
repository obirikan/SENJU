import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Intro from './screens/Intro';
import Mainscreen from './screens/Mainscreen';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer independent={true}>  
      <Stack.Navigator>
          <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
          <Stack.Screen name="main" component={Mainscreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


