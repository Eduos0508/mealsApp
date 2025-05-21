import {StyleSheet} from 'react-native'
import CategorisScreen from "./screens/CategoriesScreens";
import { StatusBar } from 'expo-status-bar';

import {NavigationContairner} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailsScreen from './components/MealDetailsScreen';
import MealDetails from './components/MealDetails';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <NavigationContairner>
      <Stack.NavigationContairner
      screenOptions={{
        headerStyle: { backgroundColor: '#987070'},
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#F1E5D1'}
      }}
      >
        <Stack.Screen
        name="MealsCategories"
        component={CategorisScreen}
        />
        <Stack.Screen
        name="MealsOverview"
        component={MealsOverviewScreen}
        options={{
          title: 'All categories',
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#C39898'}
        }}
        />
        <Stack.Screen
        name="MealDetail"
        component={CategorisScreen}
        />
        <Stack.Screen
        name="MealsOverview"
        component={MealsOverviewScreen}
        options={{
          title: 'All categories',
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#C39898'}
        }}
        />
        <Stack.Screen
        name= "MealDetails"
        component={MealDetailsScreen}
        />
      </Stack.NavigationContairner>
    </NavigationContairner>
    </> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});