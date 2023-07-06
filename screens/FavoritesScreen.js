import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react"
import { MEALS } from "../data/dummy-data"
/* import { FavoritesContext } from "../store/context/favorites-context"*/

import MealsList from "../components/MealList/MealsList"
import { useSelector } from "react-redux";
export default function FavoritesScreen() {

/*   const favoriteMealsContextIds = useContext(FavoritesContext).ids;
  const displayedFavoriteMeals = MEALS?.filter(meal => favoriteMealsContextIds.includes(meal.id));
 */

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const displayedFavoriteMeals = MEALS?.filter(meal => favoriteMealIds.includes(meal.id));

  if (displayedFavoriteMeals.length === 0) {
    return (
      <View style={styles.content}>
        <Text style={styles.noFavoriteMeals}>No favorite meals found. Start adding some!</Text>
      </View>
    )
  };

  return (
    <MealsList items={displayedFavoriteMeals}/>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavoriteMeals: {
    fontSize: 20,
    color: "#fff",
  }
})
