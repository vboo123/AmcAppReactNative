import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Components/Login';
import StudentRegister from './Components/StudentRegister';
import VolunteerRegister from './Components/VolunteerRegister';

const Stack = createNativeStackNavigator();

export default function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen name="StudentRegister" component={StudentRegister}/>
        <Stack.Screen name="VolunteerRegister" component={VolunteerRegister}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}