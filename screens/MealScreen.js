import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import MealDetails from '../components/MealDetails';
import List from '../components/List';
import { useLayoutEffect, useContext } from 'react';
import IconButton from '../components/IconButton';
import {FavoritesContext} from '../store/context/favorites-context';

/* inheriting route as a screen in navigation */
export default function Meal({route, navigation}) {
  /*
  onPress drilling alternative, useNavigation hook, MealOverview.js

  const mealId = route.params.mealId;
    const meal = MEALS.find(meal => meal.id === mealId);
  */

  const favoriteMealContext = useContext(FavoritesContext);

  const meal = route.params.meal;

  const mealIsFavorite = favoriteMealContext?.ids?.includes(meal.id);

  function changeFavoriteStatusHandler() {
    if (mealIsFavorite) {
      favoriteMealContext.removeFavorite(meal.id);
    } else {
      favoriteMealContext.addFavorite(meal.id);
    };
  };


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return(
          <IconButton
            icon={ mealIsFavorite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavoriteStatusHandler} />)
      }
    });
  }, [navigation, mealIsFavorite]);


  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{meal.title}</Text>
      </View>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.list}>
        <MealDetails duration={meal.duration} complexity={meal.complexity} affordability={meal.affordability} />
        <Text style={styles.subtitleBold}>Ingredients:</Text>
        <List list={meal.ingredients} />
      </View>
      <View style={styles.list}>
        <Text style={styles.subtitleBold}>Steps:</Text>
        <List list={meal.steps} />
      </View>
      <View style={styles.list}>
        <Text style={styles.subtitle}>Is Gluten Free: {meal.isGlutenFree ? 'Yes' : 'No'}</Text>
        <Text style={styles.subtitle}>Is Vegan: {meal.isVegan ? 'Yes' : 'No'}</Text>
        <Text style={styles.subtitle}>Is Vegetarian: {meal.isVegetarian ? 'Yes' : 'No'}</Text>
        <Text style={styles.subtitle}>Is Lactose Free: {meal.isLactoseFree ? 'Yes' : 'No'}</Text>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 80,
    backgroundColor: '#fff'
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f4511e',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  subtitleBold: {
    fontFamily: 'montserrat-bold',
    fontSize: 16,
    color: "#f4511e",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'montserrat',
  },
  list: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

})
