import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text
          style={styles.dummyText}
        >
          Another piece of text!
        </Text>
      </View>
      <Text
        style={styles.dummyText}
      >
        Hello World!
      </Text>
      <Button title="Tap me!" />
    </View>
  );
}

// Based on CSS syntax, but only a subset of properties & features is supported!
// Styles are defined in JavaScript objects
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  }
});