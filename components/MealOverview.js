import { View, Text, Image, StyleSheet, Pressable, Platform } from 'react-native';
import MealDetails from './MealDetails';

/* import { useNavigation } from '@react-navigation/native';
import useRoute from '@react-navigation/native'; */
export default function MealOverview({ title, uri, duration, complexity, affordability, onPress}) {


  /*
  onPress drilling alternative

  const navigation = useNavigation();
  const mealId = id;

  const pressHandler = () => {
    navigation.navigate('MealScreen', {mealId: {mealId}});
  } */



  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.pressed, styles.buttonContainer] : styles.buttonContainer} android_ripple={{ color: '#ccc' }} >
        <View style={styles.innerContainer}>
          <Image source={{ uri: uri }} style={styles.image}/>
          <Text style={styles.title}>{title}</Text>
        </View>
      <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    elevation: 4,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
  title: {
    fontFamily: "montserrat-bold"
  },
  image: {
    flex: 1,
    minWidth: 390,
    height: 200,
    marginBottom: 8,
  },
  innerContainer: {
    flex: 1,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },

})
