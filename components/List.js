import { View, Text, StyleSheet } from "react-native";

export default function List({list}) {
  return (
    <View>
    {list.map((item, index) => (
      <Text key={index} style={styles.listItem}>
        {item}
      </Text>
    ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    marginLeft: 16,
    marginBottom: 4,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    color: "white",
    backgroundColor: "#f4511e",
  },
})
