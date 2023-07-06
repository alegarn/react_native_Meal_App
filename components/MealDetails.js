import { View, Text, StyleSheet} from 'react-native';
export default function MealDetails({ duration, complexity, affordability }) {
  return(
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{duration}m</Text>
      <Text style={styles.subtitle}>{complexity.toUpperCase()}</Text>
      <Text style={styles.subtitle}>{affordability.toUpperCase()}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  subtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  subtitle: {
    fontFamily: "montserrat",
    paddingLeft: 8,
    paddingBottom: 3
  }
})
