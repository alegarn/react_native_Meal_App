import { View, StyleSheet, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import MealOverview from '../components/MealOverview';

export default function MealsOverviewScreen({ route, navigation }) {

  function renderMealOverview(item) {
    const pressHandler = () => {
      navigation.navigate('Meal', { meal: item.item });
    };

    const mealOverviewProps = {
      /* item: item.item, */
      id: item.item.id,
      title: item.item.title,
      uri: item.item.imageUrl,
      duration: item.item.duration,
      complexity: item.item.complexity,
      affordability: item.item.affordability,
      onPress: pressHandler,
    }

    return <MealOverview  {...mealOverviewProps} />;
  };

  const { categoryId } = route?.params;
  const displayedMeals = MEALS?.filter(meal => meal?.categoryIds?.indexOf(categoryId) >= 0);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: CATEGORIES?.find(cat => cat.id === categoryId)?.title,
    });

  }, [categoryId, navigation]);


  return (
    <View style={styles.container} >
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={renderMealOverview}
      />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})
