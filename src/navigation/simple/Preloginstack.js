import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FarmForm} from '../../screens/postlogin';
import {LandingPage, Login, Signup} from '../../screens/prelogin';
const Stack = createNativeStackNavigator();
const PreloginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing Page" component={LandingPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign Up" component={Signup} />
      <Stack.Screen name="farmadd" component={FarmForm} />
    </Stack.Navigator>
  );
};
export default PreloginStack;
