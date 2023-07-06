import { View, FlatList, StyleSheet } from "react-native";
import MealOverview from "./MealOverview";
import { useNavigation } from "@react-navigation/native";

export default function MealsList ({items}) {

  const navigation = useNavigation();

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

  return (
    <View style={styles.container} >
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealOverview}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})
