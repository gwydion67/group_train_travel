import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Login from '../Screen/Login';
import HomeScreen from '../Screen/HomeScreen';
import Register from '../Screen/Register';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GroupScreen from '../Screen/GroupScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import { Dimensions } from 'react-native';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get('screen')
function NavStack() {

  function BottomTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            height: height / 15,
            bottom: height / 50,
            left: 15,
            right: 15,
            borderRadius: 50
            ,

            elevation: 0,
            backgroundColor: 'rgba(255, 255 , 255 , 0.3)',
            borderColor: 'rgba(255, 255, 255 , 0.8)',
          }

        }}

      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "black" },

          tabBarIcon: ({ focused }) =>
            focused ? (

              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <Image source={require('../assets/pink1.png')} style={{ height: 100, width: 100 }} />
                <Image source={require('../assets/home.png')} style={{ height: 35, width: 35, resizeMode: 'contain', position: 'absolute' }} />
              </View>


            ) : (
              <Image source={require('../assets/home.png')} style={{ height: 35, width: 35, resizeMode: 'contain', opacity: 0.8 }} />
            ),
        }} />
        <Tab.Screen name="Group" component={GroupScreen} options={{
          tabBarLabel: "Group",
          tabBarLabelStyle: { color: "black" },

          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <Image source={require('../assets/cyan.png')} style={{ height: 80, width: 80 }} />

                <Image source={require('../assets/communication.png')} style={{ height: 50, width: 50, resizeMode: 'contain', opacity: 0.8, position: 'absolute' }} />


              </View>
            ) : (
              <Image source={require('../assets/communication.png')} style={{ height: 50, width: 50, resizeMode: 'contain', opacity: 0.8 }} />
            ),
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: "black" },

          tabBarIcon: ({ focused }) =>
            focused ? (
              <View style={{ justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <Image source={require('../assets/purple.png')} style={{ height: 80, width: 80, top: 8, right: 3 }} />

                <Image source={require('../assets/user.png')} style={{ height: 35, width: 35, resizeMode: 'contain', opacity: 0.8, position: 'absolute' }} />


              </View>
            ) : (
              <Image source={require('../assets/user.png')} style={{ height: 35, width: 35, resizeMode: 'contain' }} />
            ),
        }} />


      </Tab.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
        <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />

        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavStack