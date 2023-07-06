import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import CategoryScreen from './screens/CategoryScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealScreen from './screens/MealScreen';
import FavoritesScreen from './screens/FavoritesScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import FavoritesContextProvider from './store/context/favorites-context';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      sceneContainerStyle: {
        backgroundColor: '#f3a48c',
      },
      drawerContentStyle: {
        backgroundColor: '#f3a48c',
      },
      drawerActiveTintColor: '#f4511e',
      drawerInactiveTintColor: '#fff',
      drawerActiveBackgroundColor: '#f3a48c',
    }}
    >
      <Drawer.Screen
        name="AllCategories"
        component={CategoryScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}

      />
      <Drawer.Screen
        name='FavoriteScreen'
        component={FavoritesScreen}
        options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" size={size} color={color} />
            ),
          }} />
    </Drawer.Navigator>
  );
};

export default function App() {

  const [fontsLoaded] = useFonts({
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf')
  });

  /* https://docs.expo.dev/versions/latest/sdk/font/ */

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='Drawer'
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              contentStyle: {
                backgroundColor: '#f3a48c',
              } }}>
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={
                {
                  headerShown: false,
                }
              } />
            <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
            <Stack.Screen
              name="Meal"
              component={MealScreen}
              />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
