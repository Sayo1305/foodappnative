import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import LogIn from './screens/LogIn';
import AppHome from './screens/AppHome';
import SignUp from './screens/SignUp';
export default function App() {
  const stack = createStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown : false}} initialRouteName="Home">
        <stack.Screen name='Home'  component={Home}/>
        <stack.Screen name='login' component={LogIn}/>
        <stack.Screen name='AppHome' component={AppHome}/>
        <stack.Screen name='SignpUp' component={SignUp}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}