import { View, StyleSheet, FlatList, Dimensions } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryItemCard from '../components/CategoryItemCard';

const windowWidth = Dimensions.get('window').width;

export default function CategoryScreen({ navigation }) {


  const renderCategoryItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate('MealsOverview', { categoryId: item.id });
    };

    return <CategoryItemCard onPress={pressHandler} id={item.id} title={item.title} color={item.color} windowWidth={windowWidth}/>
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.column}
      />
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
});
