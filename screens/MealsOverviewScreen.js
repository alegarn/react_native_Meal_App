import {  StyleSheet } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealList/MealsList';

export default function MealsOverviewScreen({ route, navigation }) {

  const { categoryId } = route?.params;
  const displayedMeals = MEALS?.filter(meal => meal?.categoryIds?.indexOf(categoryId) >= 0);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES?.find(cat => cat.id === categoryId)?.title,
    });

  }, [categoryId, navigation]);


  return <MealsList items={displayedMeals} />;
}

export const styles = StyleSheet.create({

})
