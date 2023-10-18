
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, FontAwesome, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

import CardScreen from '../components/Card';
import DetailsCard from '../components/DetailsCard';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function CardStack() {
  return (
    <Stack.Navigator initialRouteName="CardScreen">
      <Stack.Screen name="Card" component={CardScreen} options={{ headerShown: false }} />
      <Stack.Screen name="DetailsCard" component={DetailsCard} options={{ headerTitle: 'Card Details', headerShown: false}} />
    </Stack.Navigator>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Shopping</Text>
    </View>
  );
}

function ShoppingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Shopping</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Card"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            
            let iconComponent;

            if (route.name === 'Home') {
              iconComponent = <FontAwesome name="home" size={size} color={color} />;
            } else if (route.name === 'Card') {
              iconComponent = <FontAwesome name="credit-card" size={size} color={color} />;
            } else if (route.name === 'Shopping') {
              iconComponent = <MaterialCommunityIcons name="shopping-outline" size={size} color={color} />;
            } else if (route.name === 'Profile') {
              iconComponent = <FontAwesome5 name="user" size={size} color={color} />;
            }

            return iconComponent;
          
          },
        })}
        tabBarOptions={{
          activeTintColor: '#e91e63',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
        <Tab.Screen name="Card" component={CardStack} options={{ headerShown: false }} />
        <Tab.Screen name="Shopping" component={ShoppingScreen} options={{ headerShown: true }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

