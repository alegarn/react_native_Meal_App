import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';

export default function CategoryItemCard(props) {
  return (
    <View style={[styles.gridItem, { backgroundColor: props.color, width: props.windowWidth / 2 - 20 }]} key={props.id}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={ ({pressed}) => [styles.pressableCard, pressed ? styles.pressedCard : null, ]}
        onPress={props.onPress}
      >
        <View
          containerStyle={styles.card}
        >
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    aspectRatio: 1,
    margin: 10,
    width: '45%',
    elevation: 5,
    backgroundColor: '#fff',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 1,
    shadowRadius: 5,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    borderRadius: 10,
  },
  pressableCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressedCard: {
    opacity: 0.75,
  },
  card: {
  },
  title: {
    fontFamily: 'montserrat-bold',
    fontSize: 20,
  },

});
