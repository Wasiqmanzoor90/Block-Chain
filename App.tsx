import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './screens/HomeScreen';

export type ParamList = {
  Home: undefined;
}

function App() {
  const Stack = createNativeStackNavigator<ParamList>();

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
         <Stack.Screen name="Home" component={Homescreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



export default App;
